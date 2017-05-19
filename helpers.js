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
    'Referer': 'https://members.educause.edu/search',
    'Connection': 'keep-alive',
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; gsScrollPos=; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.25228351.1495209503; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=729C74E82DE36B9398050E612F2710788574DC7DF23D3056C335A1E0A82CAE91D30A3A8B2E39F88001FF0414E7BBE7F281CCAB3E416E7BB7EBD59D03606346DC483DC648E1F1B7CA38355EFC2C14AE1F0814396D5921D6F3B5AD6006D409FDACFE66B06BB406044562CEEA2EBFF6CC8053E4179F1759F11DFBCA8BFE59107A2236A57721D27F71D97BE5623A072D1BAC696DEF61513D23E09EA74569DA4C29E82EB5BE3D370C100430B992AFB3563B1FB9F8AEF4A819EBCD0CBFBBD1213E5095D8C99E55929D5BF7C5014411FDFFA9429222315BE4478FC50BFC25E8AC0C159DAC61F0A5096BD0952819DBACE4F659506D50214B4ECCCDA6496FCB308D62F2239B1DBDD10A30C98F2E89A0C78BF28E8163BF25785C34988F3C9557EE6536EB1BA1A0D16E431634C4650D85F9E159B9206EAAD02DFAC712827FD6E3328EBAEC88CF7362BCFB4823E8896D3D17F10BDAEF1E61FCB6FC2DF137F47AEB30E7464810BD1FDC1519EC15A85AD94E5BC4867C23275EA3C6F1B8AB0BBA48E6A74A0D4A12DFA54F831591851397BBBCEE56DCAE6FE32D49CC5EBF6E8D270CD3AFF3370D5C14D1F08AC13594FB19F489285154FD71D7197CA44E2382E8C826A17A9FC6F1F0B49D3B42BDE6617982F5427FECC60B1720AC00900F3E403B3F59BF6FF2700F3E3ADE55915B5FF31C4EFA3210222325B040CF54EEA4ADDEA969397B8A151ED23DF9428E97A13E530E4F6F0C4109C155804C9B388D72CC3065E91EBF918177B973'
};







  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
