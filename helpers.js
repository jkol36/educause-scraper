import agent from 'superagent-bluebird-promise'
import fetch from 'node-fetch'



export const getProfileUrlsForPage = page => {
  let url = `https://members.educause.edu/api/MemberSearch?pId=4a86fa47-eb9b-4ef3-b6b6-f1a082160768&membertype=Individual&page=${page}&perPage=500&sortBy=relevance&sortOrder=desc`
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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=F7BA0BA948BC80A2B0FAE17EEF913080ADA3885E693DCE0F10F43A48443B8921F3166674F5C4F89849FE2C3F1C68BA14F587D7738B1883E144AA451350AC897C0987D28A1E135C760D5FEE2394D859C5138D030910562ED76FD28066002F33A8AC5A52F9FA81B678AF4C99B4F36C8811338BDF50582F6F0F5EB8B437B401D84993922AE67EB5531AD3384462B1E24CA665F714DBA188F82D5FBF3D1838402CA5B41889BD8323D5EB32A051388B5F1D5F0515832239B7B9E162DFD09C94DCEAC668A6DDC39EC1D44636D2F11A3F1ED8E96E7AA3907EA4C6C9477A0268DE68908A5C4BF1306C1F5112EB592DE28BE53672EFF87B2AEF646967425B05BCB477B8D2A3DBB7605D4C5E63B35EDDF8CCC7C4A93F21136B26E1D1A5D6520B171567B1B428E042CB4213EBF4CC1B3E42E342CAD6601BCE6C04537D27E39FF2577999370D97201522A8E79020E14040842DD2B73EF415BEC198DF568045751E6E24610DFE304D1E8E69BE859C9EFA2DA2B3D4C3BC52AEE79DF8AF31107E4AB5E90A7F2414A153132F0272D134426D68FE1A43B733738F9570AB0156D7D0505BEE07D2DFC411216051583E5608873540A167B725B59CA0CE23099845B017393B139CD749340F9B8840E6399C85AD2023B192D34A78F2699C00D28397270AD17413A219635A87934439C90AC1A5EDDEDFD27C59032D2AED712E030E3BD07176187764986BC6B64F8F75D3454E98D5189E3DE69301E100BEBE92C6DC60174608B36CCFCBDF63'
};



  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
