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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=4C03D81D0874C90D2493433E4837A2FDE3A8CC1993FC602BF75E0ADB286CF8FF99F6CBC56FB22BCA14F9F16E7BD76C3C52D21DA31A8B0AF125BD2356CF6F6C71C88EC79ECC815CE447846A4DF549915ADFA2656D74F9AF797AA120475616461E7F7E052C0975297798BA44CDA82E631673AEB015E9A8B6E66626DEBB4FEC9A949E7667C7DAA84D3AD196953028CEDA73CA61B3AD86F9B1A9A5EE4BAFC984A33A91D1524A494E598794081170A2A0C82D4DB554D33B9129D2A5683AE1AD1EAA53D7C4146CF2302821E1EF966B9E040245DFDAC5C0404BA8AC41A3CA15C497A17FE17D496E76CBFA7CCD399351818E368F68DEFFD0598E83F82E078CEE392763C158D88F80454B8EC619310AF57701E0D6D54757DB89BBE6FC1EA20CE5F40FCE468692BAFFBDC462741A6EE66A66A4154ACA2FC44F90158458AD3C5434C8D266E645ABFD39033AA565949F31FFE895BA660B0803203C2ED461574EF1B8EA667E8E107D4422A10E5DF45BBDE596169C7CA1A235F908C75A65941CE8E4E82FDAEF958510139D846F5015BA6CD17D590C0A28FED352061C296FDC5710CBB9B45F1A205E44F9484B89127F93910C566039FB69C95AE47D942197B82F589CA940AB1DFAE84D4762D5B2F1A2C4A29DD16B39CF94C20041EFA6F88B485C51227001952E76DB3BAACC266622F9ABFC16B4C809E7D283AA2265A0E3B8AEB73994F3F23F5D7638678ECB05286CD77CF5B46667CCCF6C326D28CB932DEEDD07D0AC420AA52544'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
