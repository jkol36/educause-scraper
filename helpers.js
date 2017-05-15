import agent from 'superagent-bluebird-promise'
import fetch from 'node-fetch'



export const getProfileUrlsForPage = page => {
  let url = `https://members.educause.edu/api/MemberSearch?pId=4a86fa47-eb9b-4ef3-b6b6-f1a082160768&membertype=Individual&page=${page}&perPage=10&sortBy=relevance&sortOrder=desc`
  return agent
        .get(url)
        .then(res => res.body.results.map(result => result.fullUrl))
        .catch(err => err)
}

export const getMemberProfile = shortUrl => {
  let url = `https://members.educause.edu${shortUrl}`
  console.log('getting', url)
 var headers = {
    'Accept-Encoding': 'gzip, deflate, sdch, br',
    'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'https://sso.educause.edu/',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.1582078006.1494862809; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; gsScrollPos=; sc_expview=0; .ASPXAUTH=5E8F22B1832FB2EEA61723AB27EF8437649660115D040210612220D2FA25E71241A2B4FF33333BBE1A61F3BE8AF9D25E3759188EBF8F3E303EB0853484106D08D00E6BEDD21479F2B88422C74F93EEC97FB85545419364E954B2A61ECC3CC46FAF659154BEABBD0EE3997197085D58066B092F1F33B7619C00923038F778AD3C52ECDCCCE3B4EFBA05AEC618547655F41ED5DCD5A2CEFD2FD7719BAA40613FAEAA8563CA341B7E34C6C9D01204A6CCF265329F551E903BF5F5988CF707BEE0D28168E517BD532AEC0D8851422CB5DA861E90039C2CF647CF086E34EC5737FE21617D7FDFF3DECD2C4F98A1858E8BB9A6636D364B273D1D59D3EEAE147D93736B3B0BEEDF668076B1A6C90FC1F6713066EAB81317F4599ACF4409F86407CD269A8D8B545F9DEFAB0EC587C19AAA0795A13610D98A3790E64286F834FD18451CA8E66A2ED65EFA60FE4D16E9A3D787843EB602B14E7DEE9B8EC38452560D6AB67388C0355F6966CA11709443F5AB3E64E681FFE27A4793A2F37118128FDA9D3D481E85B861BF264594B2BF570790EB8AE75D81003EAEB4C8E034EE2597B22C3D968EB3484F8F5E63C3A46FAC1F8A6C35646EE158569BE1CA0A158757E93B93969DF297CFE52C1DCBDB4A7456F495469E14215490475633562A7DF64106260CE8A457590CB5C3E204EA4BA757C52B4A3F4A184053019FD281743CF70AE81E03F547A98EA28237E02296F3F1551100DC2A6899BB12215F2CC7D6F8939EC829639D21'
};


  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}