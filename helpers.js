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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=2D8500E09769933171B70130B63E53D45D78DACF159E4484675F579D247C0CDDDE49E30A83CD4BFF605ECDEC95F4EDD69D5BBBCBF53A7E371D3EA477F1868F8A26DE2713623F435FF56B9E7CE03351576BF0CAB064D80F57BFD59132BBE0C566ED147734F4868334127A5782E8D714A7B20A02DA882B4D068322A7667ADC7FBD9E2524F43E79FD35774CB71049A697281B5CF3468EF0E5E64B470CA22746B1AB459E542719A1C5532DB7EDEF7E1DDAEAFC76B3A8315EC17F8536A63E47AE323EF4E149C84186DCE0882D4C33531AC2CF6CF2378F73FDBB2CA2F5B00A95F1063D7350E68FD2D7F1A44408F3BF88BBFC8E2AED1092089A032D0A3C75D28555F37F28994EE4049E949C2B414C67F6074E2547764562771D338BC5CD50589393FBBCD26FE681E236ECD9633CCA8DD84C41E3FA3CE20D52972E3A72118DA2E40A2C3762A5BD3C2D2531E4510273AAB609BDB3DE2AB1AF3410FED8080A9930656F601C18FA95090BAFF18857920C278B2B2017EB1899C29C1AAA61A138C6239CE89E80B1E1630652C2D837E5C748762F7DC4D9A7407C27637C2AE01FE1A02793A05D9C1FFAC4057F7948100447574F109CFA02CE74060C2A05814031C70B0F745E9F24B2383E04485248C64AAE6AF12CF8629B15BCDD1CA6FAA0A8A29E69769C2FAD22D601980FABFFD68BC94F469406E716CB261068D00DBBA5B6974584C3FB8D315491DE476050921E2630B62A1DF15FFB02EFD2CE89EC68B811EF4C5EBA861B41E2'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
