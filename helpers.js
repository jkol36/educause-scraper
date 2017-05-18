import agent from 'superagent-bluebird-promise'
import fetch from 'node-fetch'



export const getProfileUrlsForPage = page => {
  let url = `https://members.educause.edu/api/MemberSearch?pId=4a86fa47-eb9b-4ef3-b6b6-f1a082160768&membertype=Individual&page=${page}&perPage=500&sortBy=relevance&sortOrder=desc`
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
      'Referer': 'https://members.educause.edu/search',
      'Connection': 'keep-alive',
      'Cookie': 'ASP.NET_SessionId=4i233wrsv4cn022qjey0pmmt; _ga=GA1.2.1466510392.1495135902; _gid=GA1.2.702216318.1495137175; __RequestVerificationToken=8dxfn8OSsZmfgjbbVin-sfCfCm7CTgoDnQGlc7VVbD8U01tm4HDjt3gXtIVFh46RCG3nqknlgJwStQdArKb_eNipNnamBZz-bDbkVnZMoqc1; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=BEA12E3BC5A82F7B8CD7D36706AA3C650E68563CBCA27247B807362825EC4E546D2DEBBD6B37250F60981AB5B09EE67EB9B38C874F4559AC205D1BDBE4B699B174F363EF2CB46B6F04189469C23410319F624A450D717249B6330FF052EC60FA2F6A73C50D864F6FE57F66DBBA153D07208928A1AC6CE393DBE95AC1FFCFA604AC379EED64872ED4B9C2A9970A664462E6D1500555424339FCA585B1876C881ED7C896629B36EAFF4BBB969273B2337299D43E74E0EF056B7A5A70D419F70AB097C8C06F0C2363D6E8560A6C3D5E37388C69EF827E28E680885857B566ADD0F680D1A5F96E26313CE28C8FC6F3E5F785AAD8ADB0BE8620D827C0707D2829DB0D9954F26E3EDFE5745CB3B2D1077A19C1EEEEEF50514FD411D7E99AF739E589AA3BCCC90949DE8FD27AAA56451D9280D30F2083753EE725032DDE12043B4C23CC13B6FDD0902080FF6A9BF8B6CBB42F9D3E424D50F97EDF613836343D184BAD7C05E985DF4A98EB6A8675B30AC47002842CA045FFE3FBC441451BE7F91E974F72F30C919658DE8AB3BBA919BC18A7F37A76D39E3BC061E8670E97235C7D37D05D3C1A4E0AD030DDCBE20C2095FEE0FFEFA0585C47861BAF4EF921237C36556CF2A3FF435052826CC4AA1EB7386EB66F1DC0AAF0120362FCE54CD95B4E2F8A447BA1FB87937790BB8B66682B47972399292E51CEC775054FFDE827697CD56514A348331DD7A1815EC9ACC6FF4968F6CC0B3A41DD28042E02C64352EB1D17D2B289'
  };

  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
