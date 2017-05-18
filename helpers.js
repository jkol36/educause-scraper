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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=AA76FC8E2F39AE42203410C418CB48B8521758627E6BCD7E7095337F518F2BC7E2C372C42BC2031AB129A350CCDB9085217BF1FD8E450DFC3EB563EEF060B5C851B7284289E98311F9BF780B9A909703C3118B0124CC3F34909BB510319731C7776EFCFADAF83A7F2E18B7ED9D45B2B2292044CF44F15BA10C72A5B7A751AD96656B490A1B1F7DA5B24555A3023815E6BD25E6C4B8A115D51D2A37979564D5FC6E291F1AD1356F7D54498DDA1329BEF9444DE2127F9BEAF12BF71C9065DF8AE96293C36057B56B6B704F8DB24B64F9208F35D143D58F0DF7020BC819F80B9EF0A57AD14444090988D5849A292C2E65736D76101C60A81A8E1B13F0BC6E859631158B4070B11A9F4D92809667F63964CDA3EA9F02F4EE7861BDD28A971E086A28FEB164FF027DCE8B8CB24EF1C3CFA7D98D0BB936037627C11F1AFCF5243C098CC851CAC1BDEABCD247FC6FC7E5AB81A447E989DE9B8D5C19F70A4A2C34001A89067AC1B5AA494D2EA7A75A119FA92768A3A5B5775FD0E728A0DC9BCBAECA07AFE8546B68D88DA2813023879C48EDCB4684F3CB1303E77CBFD7796C65563984E9C861FC1301A15DD307441DDBD6F62EDB2E1E91AC0CB2065E32A205CCE99A11820012620B744F823308C5EE5986FCE2AD0E2E504762CB4D3676FC669E6A74F80DC2B3B308A417F8BE93338AB4731ED45B40D0B924138193FA5F61719D31A9C42DB37B85D7C41F6C11350D9F4C3F617212B0E0710DF5D1B2EBEE9B1543CB45152C'
};






  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
