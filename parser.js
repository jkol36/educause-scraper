import cheerio from 'cheerio'
export const parseProfile = profile => {
  console.log('parsing profile')
  return new Promise((resolve, reject) => {
    const $ = cheerio.load(profile)
    let name = $('.profile__meta-name').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join("").trim()
    let title = $('.profile__meta-title').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join("").trim()
    let organization = $('.profile__meta-org').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join("").trim()
    let location = $('.profile__meta-location').find('h3').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join(" ").trim()
    let phoneNumber = $('.profile__meta-phone').find('h3').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join("").trim()
    let email = $('.profile__meta-email').find('h3').first().text().replace(/(\r\n|\n|\r)/gm,"").split(' ').join("").trim()
    resolve({
      name,
      title,
      organization,
      location,
      phoneNumber,
      email
    })
  })
}