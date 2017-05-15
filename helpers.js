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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.1582078006.1494862809; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=6FCF64B8921FF53FFC78C99DEB98CF877C2789818A1BD94159C8DDC7D395624478725AF6AC477F3B87951D0C373013E2F9EFFD3EDF04C7C5D17FE472DA0833E611877EE70F4AB690132EF96ACE88A839F30A88C1C30B99C0C0E7A178E5CA810E8C06BE0C8786B1BAC8246C1F9B5CABB941D49A56C04F93BF0D8CA328470D5F3767832F73B2C1D0D2FA7C7C15E5F51395EC6EE85BB6134409AD951526B42ABC835F951CA8FAF27F12E6F4152CB63B69337DC4AB71E0AD8B65953B874ED2DE0ACBA335AE555FEBA1B1AA7EEE791D230BF6901C12D6487A3E5DE9C25254162001A9C93A41D14C5CDFDF81597CBCD042E0466CF5DA5814905144C9F913638B75747AE87255466A798BF3175848CFB5E177F2466C0D717DA2CC9CA9F3443FB1CC6EFCDF8F90CD0D47DC4CA8530F8705C867F9C8D492E9778F64F2E0E57246AC7770169C0CB8B26DCD00525A8263867DD76659C535EDD940C89ABE397A3B324B83C36123F49F2808530157203423CA4C8D5C39AE5DAAF921AD41D0FDDAF6645BC1F50009B5DC09DD94FD45BB77CC6AC90D0D0F706C90D852842D3D0F4F325E0230355728AE5086FC2260E69847D79B72CAF8BB19A302AD4110697092C4D6B5D8C03E3BFFEEA7080A33FF6BFF95BDB72ED46133022D4DDC43FB7CD9FD9735199718CFC626F58B22D6A32E818A0C7AC3D11049ED266380140CE8EA9D88C1C57EC7F416F8B9409D1B2D664158CA55992368F38C115572562BD9DEADCA4E23E285D83D9B17'
};


export const authWithEducause = (username, password) => {
  return agent
          .post(url)
          .send(data)
          .then(res => res.body)
          .catch(err => err)
}


  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}