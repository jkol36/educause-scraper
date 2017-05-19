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
  console.log(`getting ${url}`)
 var headers = {
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'https://sso.educause.edu/',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; gsScrollPos=; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.25228351.1495209503; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=BBAF52EC85971809AB97A56DC5AB1901B81D3F00A26452D17AE57A34C6D59D3DF23E57257C7D1EE483EF59E2028326469EB6B55A537CBFCD3A3739D819F756EF28ED33D0B7C51575EEF8CB5259F38F504A02C7BBC51BFAC6997D85695E5099DD2602EB9FAE10643431B394DF2FB9E7279CB2C9FFDD5DBA90EB7290540B3E10F8242C9BA07B3252172FF4A9A8FE1B24CF4A8D61A7934CB250A26CCAE4AE1614B6B640E5FFA3527BFD82DD1F834A42284374ACB7C95461B5B5A995F68C3EDCAD5F306CA84B69C91491BC6F7C32964691CB93AE2CF3085E4F43E42A42CDFFD80844D44B2E49BDF9EDC0BD1BB999E483A51DF472CDEA4CDBDE8F56BD72063A4ED1EC9A61A15B7EA19D54848509D669034084DD2A66846346EA64655E4E9F4762C271ED6C52A19FFD75AA8892112B7A638949F17178B547379322CD10D1B125740CF987ACA6F4AC861B90A8FB6F8DFA401A68CD05BB2D7451A5265BE88A75B3465717348784315202DB3B02F16FE344718417856C78D86D9A1D81988C491A7EC1321E4262AA93ECD354E438E95F60F582F3D54D67E2D2EB2E5B01EC039FAFF3FB77E9E57796A04207538993EA96F80C81D019B4010DE8964C8F28511059C8767243419F6D44B8E26328F55AF1B43542185FD1900974F5E2E7094298EDEE40C769E5EB28911D55958A15BFE11FE127FE932D90B3E32FE8E39E8149C191B072BF94FA42DC2F9EC1B4CE3EE0C471D317ECF1F585F8013A052FC08970ECB4AD8F024D90A8'
};







  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
