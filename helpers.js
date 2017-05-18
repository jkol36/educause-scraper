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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=BCF0FD37CF7CC5531AE9D03D689A32BC7B886D73441A0FEACCD488B9791163ADFC0D7C2DBEF2303CEB1EF3B34633C1EF43C95840BB7EFB354DF526AE22979A4BC1D06D3278C47260F11467F78CB4D5A31C2A71FF45BA99898B816C6E60BCA435BB91E8A4502C2CC1FF2C9D6658672448D18968D3446BA5B4CA239B22AE71C379F888CC197B9BE29784848619C24D790EF23AFB6A45C739794CF7B844EDDB864BCB5C278B02CBFADB1AB7D195EE111CE90D9232144FAB348FFF56C4E5D8C3BD91324050D61A10A3530140ACE0C6B11F4729608D37895A3103152D37385709CF0B39B9133312A97E2F596AD1A10489CFA8D1A838F36445845CA9C9C040304C4E532ECF566F2530D37E2D4507605EFAC31C71407C960DF8DD87FAE9D97FFD978B0548E59D50C03D8A8F1458D8E395E5A08FA2B066808DEDCB777F819597DEBD76AA962A237F8BB8342AE03A8AEF2A5C0514693745E878762175AD5F06943983EB4BF132F2CF0862B3BF01D28C84E3AE63E85EE778B461F2B093D4FA1FDC4AC609E52355C615FE6A67BA99CA3CDA14F32F604E96E3579525BA39A2D1BE7E01F488EBD60F7C1BE8D5FE5EFED06159D91C083A1DF737C880A3607CB6C6A726ECCAC7AC6BA70D7F502977ABB16D3A6E3B458EC50D163983664AD3B4D9A0C5FFDFF2BAA747792E61AD51D3644CD882BDD5CFC5985EAABC69AA53DC31367ADDE9052F2BA9CEABC671E14FD831BA3721B77DA580AB631E9B79456F476E0A422044F9950386'
};




  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
