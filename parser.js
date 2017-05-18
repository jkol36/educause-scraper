import cheerio from 'cheerio'
export const parseProfile = profile => {
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

export const findVerificationToken = page => {
  return new Promise((resolve, reject) => {
    const $ = cheerio.load(page)
    let token = $('#content > div.row > div:nth-child(1) > div > div.panel-body > form > input[type="hidden"]:nth-child(1)').attr('value')
    if(token) {
      resolve(token)
    }
    reject('could not find token')
  })
}