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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; gsScrollPos=; sc_expview=0; .ASPXAUTH=750F449C749A4AFDF7AEFEE5F70330F52FB7CEE784D1A49BDE3430742FEF04A5929D3D1A6B0E636FC4527C41B920D72C2B200C2F06F7CD588B005E04DA0EF10CF689B575F2A62E6A96AE8926CD52242C312E2328D5564A72DFCEEAA1BE43B7305FB03347DC146044CF6222F6A57659E051C492400A9D0332D43B72FDC0152F2EBAE029ADA419138A66161AF364DBA63EAB3442E4567F400A9A55549B9A515865098FB5BB021CB728A1E61A32B2B9F745B054A9B78064F9B171B7BC2CB6C915DB958B80206B6EFDA555D3CA1CABED865CF227510686F24C99B2D2A13FBEE5DAF037A6ED6187285589F76B49DBB68C25196769A85B36BD536BCEF16646226A6F4454A4A941D0EF8F6DDEDDDA9F020516D9E3E402E2F60FED1F6F10EAF8771C3CAC502159B4EF9795F26615408813501E95F1C0A89FFCCDAFEFAE4E7E151FAC427D8F1D1D96A41E38AFBBDF877E899227C7D567E5B1D5624A14A478CEF11D052717AD7DDB42DAF53E1D533B76A66F987C67D692E20109CBB802180DA5FD7AFB2F5F7F0849A1DF96A0E12BF64B5B5F9E9EA409533D41A89B65FF3F5FF8F33A79F269603B3192F1901ED9FC3749128F12CC82500C8310F5C248586AD13CE6AB7AD5C682CCF266D41843EEB4BF0A097FC589AA8EB05B12FA739B6014BDC2FA1B5168F78BFB4E0C6A61D17339BB8821743C6F1E36362D4B70BB8FDA12AB2CDF283AD994F3017F32066C2CC116AD06708340C73CCA07BF29D2CA231AEF4C4B8BBDC31E1A'
};






  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
