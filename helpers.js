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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=F42190760F6E409485394348355087FA1237B55C4024276A759CC31A17FDD13CBB58835966431C0F8B6005724243765DF7A8BA090C9EA3C5111F327A4E84BFC3AAEA4DC6ACB372EB7D91D8C89E0ECC3FAFCA302A79317D7F544A47CCF51D1C022972A1AFB251710FC6001B9CBC85DF1F0713E1A5D17DD3DF9ECD391D7AAEF4BCA67F24854BFF44940271D834C5FC468271CF736AD72E7B2A875DBCCB84D56474FD29B9AA6C45EA85F3801A63492420FF379335EB96E3424A03F8505B22F2B8F9DC4355620DCF9436E3357DA3120FF2C3915870EBB2F4BEC2C29158DEE38EDA3B20C42DCE4225EB25509023ED6598E4BB2D50229B9FA4D42BCEB970421A0654DA5CD35FA8859B14652063E26C0AD515C15A68802E6FC198C7BC6DA70D04EDEE7882C73033B3A4FDC6DD41A0CFD41937099ACB2F872AB15E649175D3221B2789068771FD0C568681DD074537B8792862EA8257A25A007F64D98D51C25E4B5A3868E221DA112997613446774B873213FF1DF954CE1BA298E7B8813287D614A73BD85958E897E96A98601676B8E7729330B4D0B926D31DC479FAF643A9CD612C613F847CF59F51004C273B5444C5D7D5CA58F512FB48778944DC0CB126BF3036549F5B79B6D91DC20E622036D9854FB36DF0CB6001A285F3E6B77F187C6DD375236FE83BABC6D43DE201884E689957A0C899812E514523498C70E93F990BD075E729841E8730C199637F0776E356C618497209F0B830E1862EE8E5C29EDD67FB6CDE'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
