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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=51061B16D6F807732964ECAE800581C85C1690B940B21138A4741F23AEA51D0D07DA89E740BE261B7B2AC916BC340ECFBE03FA72FF20C8F76DC5C852FAC874785903D3B711714D7AE396539113D27AA6949BA4EC75D0BB14E001BDCE1C2D5CA098D44FB1D8239EA32F3C85116F85B0161D390CD2C4510E37235154AA9164C643612B0877C830DE55471DE663238114ED9D72421A52A386525B7CA4E8DBAFE33262B2D9D455DCAA2C6DBD9496FD71E451BD2B65B1EE483F98B8FEB1349E7531A94B3C7E41217B967A0EE1262C14277F80C7717C748CAC90FDA552C9B0F0029FE832FEB6BDB94A1A53ED07EE19E4E20F206DAAA2D3D01FEF4C4E5FFB2E159B5A3E07C70FE4BF5F0ED618A53954F2F5CB7952007D7B12D0A7EE0151CF8ABD1A7938697AE6D0E1B211EACE6B7584BD28106B7D4D0C289C01256A1742318109FA4DCB2B052BC292EAC467E4F19E65AFD60A1B3A710085332EDBA2F1061A3A4584A7C0B34EDEB615C3A1A96574CEE5ED5A185807230890952B75EEC939DFE2140B8E2EFE3ED01FC7654F8141022A79FC7BECB4C85B7AAA14D8596A2D038C68A62E9CC434F3C512E77CEB090DA5F03D5E2D8C79E2B1280E33D4A314505BCEE79AEF4BB904289EC86E100CCB94AE776D9F0CFCE85DBB2A70092ABEE6BE95CFF7A2B44423E1CE0BA5A1CF14D5A683D2535F3455FB7C326C5713F01ED76FB3DE96F8005826360F03B92A811A230C9443247FEFF07252027ABB00F27BFC031D2C57A411CF07'
};







  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
