import agent from 'superagent-bluebird-promise'
import fetch from 'node-fetch'



export const getProfileUrlsForPage = page => {
  let url = `https://members.educause.edu/api/MemberSearch?pId=4a86fa47-eb9b-4ef3-b6b6-f1a082160768&membertype=Individual&page=${page}&perPage=100&sortBy=relevance&sortOrder=desc`
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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.1582078006.1494862809; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=B637EE0DDEA3A14CB0A47803AF0F0BF254EA3632C68B3CC8EEEE47585CF785BB729A8680055114F5845482B0C98BDA44BA594955649C6A0ED2F07C149258FD8A15B1D94CFF850CA17C3541CFA2A1FBA08051068180D686242D50A4A34E45AEB24A17C20A2CC0A52C35A23532FF0654BBA64FD008F6E105A017F37FE74BFFB4D82D2A6C284E9606DEFB7B3347BDC3A7709DB0494FD42600A46ABFD9773272304C1549A6E4CD2680B6254AB2DD930161CF93E3125F4157A0AE28C7B4B52FE52B4BB5C6B8EE8F26F8B8C32C908588528D8D8BF2239A041D3A951EC91761A26BEECFFB4183E758014CF8C70FCFA6A06FB3ECFEA4FBB5F5F8F7944A80EE42A9DEEF20358E71522858BC67D931098868B9BB430B31056C292F61E50420F937DF2CD5983BF77E374211417D08BC76F78CEEC2F8845A36663300EE2970F72732E05682270C330029ABE4A9A2E4145A17CD451CD68B684596DF8C58E1C10AE8500FF778E6B03CD4861E0D7C0F42BFFB58DBBDDA8D8934318BF73C064489561125A4D9BB99A7713A4149A3646D02EAFEE5E8A8C455AE6A032F8EA6DBC44DA9539F4D4BB00525B4A2F94019E3EDE5DE39A6A632807F9B9352CDF293EC37C1A1390188F9A796853F5BEA6C10780246749AB01552909027D1E4AA9B400660E3E3FDAE314A9DD623B493DD6367D85A5D42FC3D88E39E9BDFB1FA339DA5DE7AEE975C54C20F5C0DFE751E6AC75F2FE96E4073DFAA0DF405E3253D18338AC1041085DD5F6E996B9B'
};

  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}