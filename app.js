import csv from 'ya-csv'
import { 
  getProfileUrlsForPage,
  getMemberProfile
 } from './helpers'
import { parseProfile } from './parser'


const createPageNumbers = () => {
  let pageNumbers = []
  for(let i=149; i< 500; i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
}

const writeHeadersToCsv = (headers, csv) => {
  csv.writeRecord(headers)
  return Promise.resolve(200)
}
const writeResultsToCsv = (results, csv) => {
  return new Promise(resolve => {
    csv.writeRecord(results)
    resolve()
  })
}
const createCsvFileWriter = (file) => {
  return csv.createCsvFileWriter(`${file}.csv`, {'flags': 'a'})
}

const writer = createCsvFileWriter('educause')
const headersForCsv = ['name', 'tite', 'organization', 'location', 'phone number', 'email']


let pagesScraped = 116
const runInitial = () => {
  writeHeadersToCsv(headersForCsv, writer)
  .then(() => {
    return Promise.map(createPageNumbers(), number => {
      return getProfileUrlsForPage(number)
      .map(getMemberProfile)
      .map(parseProfile)
      .each(profile => {
        return writeResultsToCsv(Object.keys(profile).map(k => profile[k]), writer)
      })
      .then(() => pagesScraped+=1)
      .then(() => console.log(`pages scraped ${pagesScraped}`))
    })
    .catch(console.log)  
  })
}
const runNormal = () => {
  return Promise.map(createPageNumbers(), number => {
    return getProfileUrlsForPage(number)
    .map(getMemberProfile)
    .map(parseProfile)
    .each(profile => {
      return writeResultsToCsv(Object.keys(profile).map(k => profile[k]), writer)
    })
    .then(() => pagesScraped+=1)
    .then(() => console.log(`pages scraped ${pagesScraped}`))
  })
  .catch(console.log)  
}
runNormal()

// getProfileUrlsForPage(2)
// .map(getMemberProfile)
// .map(parseProfile)
// .then(console.log)
// .catch(console.log)

// getMemberProfile('/randall-deich')
// .then(parseProfile)
// .then(console.log)

