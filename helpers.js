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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=3B8302E40F11C7E3D553B5037BEEFAFE1F41F443AE7E1215FD24B87679AEED09A2721C408F4962BF78AA70842418E722D9DD097F936BA608A9BD3B971C2EA52E96B8B121DDCE8E5FEA8396973E4D8C20ACECC79469AFC52BA526272605033843F2789CB1A94BB5E9F205A722F28B260125F491D6607992D8AFC66E5058548411E60C1E6541738AE3C3B19608823421ED2DB4749B9EDCF4BCE09FDF3F10EA82C3AE74A5C5EB1EAEC47FD017E4AB664D01E748F13D009BE3E706EDBBB3F0408C9F52ED85246760B6CDC1EE3C421C91F5F86D4C60AF3A1AE5B8E9F60FE096DAD24422A592606F59F512822FB05B17A3FFC48EBF14E56CE90EC1ACBB10067CC0E387797F8486D2F97C70BBD6AB96CFF12CCCBCFC56946C91EB9F8E37F42FA2426D722C1B1A7F36F81164FBDE362D4AFEE985BA7F693924738F15348B6F9C724ECC38C399975DE24C6131C48E95D40EEBEF3B402079275BBDEC3D2718942FD698C618DAF357D9F1A63E7FBF07903315EE86049753AFD5C307D2EA2EC34CED77B46EE703404DDDAD5A6A12DC187393024DDC2A9B4DA37E45814E02389DF1241B612968224CAAFDF29AC326343CB92ADEB56483F52EFCC71A5F07DEB6D838855A7CBEDA13EF497E3C539CCF026A2FA44E0AF98AF923090A3C68A1EAF1C6B1ADC086D8F41FBED0F70FFCDA6196699186CC062F9D39C49F6E99E76501A379427658B2071DDFAB08F0ECA6EB60FE6DD4E39EBBA97DFF2159346AF06390BF24E233CBA6FE69'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
