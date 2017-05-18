import agent from 'superagent-bluebird-promise'
import fetch from 'node-fetch'



export const getProfileUrlsForPage = page => {
  let url = `https://members.educause.edu/api/MemberSearch?pId=4a86fa47-eb9b-4ef3-b6b6-f1a082160768&membertype=Individual&page=${page}&perPage=30&sortBy=relevance&sortOrder=desc`
  return agent
        .get(url)
        .then(res => res.body.results.map(result => result.fullUrl))
        .catch(err => err)
}


export const authWithEducause = (Username, Password, headers, token) => {
  let url = 'https://sso-users.educause.edu/?resumePath=%2Fidp%2FQ2e8a%2FresumeSAML20%2Fidp%2FstartSSO.ping&allowInteraction=true&reauth=false'
  console.log(headers)
  return agent
          .post(url)
          .set(headers)
          .send({'__RequestVerificationToken':token, 'Username':Username, 'Password':Password, 'action':'Sign+In'})
          .then(res => res.text)
          .catch(err => err)


}

export const getLoginUrl = () => {
  let url = 'https://www.educause.edu//Login.ashx?returnUrl=https://www.educause.edu/'
  return agent
  .get(url)
  .then(res => ({redirects:res.redirects, headers:Object.assign({}, res.headers, {'cookie':res.headers['set-cookie'].join()}, delete res.headers['set-cookie'])}))
  .catch(err => err)
}
export const getMemberProfile = shortUrl => {
  let url = `https://members.educause.edu${shortUrl}`
  var headers = {
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'https://sso.educause.edu/',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=5A391910BAEA119BCF906DC6228B3B1585C6222FC0036D3A38A24F378D296D5D052992392F7040ECBDA4525CFAC3D2F093F397E07BE611B1D7C7F10388455291D5D7A59147943CA337E8E86AA91A0F5BC8D9AE4BE32C67551D0D7961288F5C52F64C783B931F6E2F767E5BE692EA778B7F55F1FC3BA05AF634145103CCD484F6D2D5DF0259F6726D4D96F6F21F7DA471604591E9364D10E76704B3954926AE09A48D1A5BCA3C41913A8F6206AC2D6210D9C68044EFEF20B655A77E6EE259C86BF820810C04FBA65C18491CE46C821357D5383EE5EAF21EE0D1916B82E5887392BDFA4525634FCCBB4EAB128974FC110F3EDFE6D8D22A9BE5D8F2E4482BA2250C475EF8CDEBF8970843FFB6ECD1A85D9D36DFEDE59B40FDC5B58713E392F82E4F036ED86D4B0BBB3D2350B89555ADA5A1DF3339F2F06930CD1BBFFFD50F5CEF13AB686B70F5E1F0E6675C332607F777021AA564AE752B0B60FD2D7109D05CE24FAD4F7ECE112F7108E6D10191C514909AD918680AB9831CCE621F2C0B29403AEFBCE2F509A09C0DDFBCA479130C32708502C8FBAA73F35ABFA4D0A2F5035AE7D911062243D0D75C9C632C881EDF08D0CA390DC487EDFD587B9884BC8CE3B8B7E59914A6007D49774D574366F5C1F6BA6F525CF0688E1DD676383BAEE2DDFF82B72EEB9CB0326AC73DFC88A43F08C3A9F1A5E9346D0F4FD33069B751593F25B7F7EA48277C605C8458B430DC552AAAD6DF3A3A95B6F8D22E9C9C2E32A1E0113EE2'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
