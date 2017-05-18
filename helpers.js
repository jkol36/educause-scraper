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
    'Cookie': 'ASP.NET_SessionId=fl1ip2n313s41p3nikbpt1el; __RequestVerificationToken=-srYKlpoMATwPuykNmyGfUVJAxfx2Fnlao9eEw4-yjIfOD3z039KeizWJ9_3MG1C1BiLwCGQQtntBHjnxaqowg6zNYweQD5mhv-vDTU8iwY1; _ga=GA1.2.1941357446.1494862777; _gid=GA1.2.911414315.1495135884; gsScrollPos=; _dc_gtm_UA-64677622-3=1; _gat_UA-16119816-1=1; sc_expview=0; .ASPXAUTH=AA3F3C4F8A03EB4C97DF012CB1535FCF1C7A0881189266ECBF8DDA165724DDD6708001935C2912ADADDB5B46911DFBFB4F3527777CBF09C487BD4AD2C24A3E0A3F294536A3D8D8F35F5DAEA63F60A4BBF5A28C534546FC8F2B30BA8C621B4A86643623365D125E1E4AD9E3D1EF061B84B5AD2B75B28A915A4027132D49E724CB8660FA2DE72D738ADD3FCB07AEDAADCF2CCD70270A2CCD3A8FD097F4D126BC51AD766E07476AF3593ECA1C900B503E27B849CCD05CAA2F45EA6C2416936695CD316EA17BE3227BFEEB6080AFB8097EF5CBFA34A1219C93A3C527A72FA3845D86F683FF4454BF44B09C94047326DD3901BBF13A5FE82A09F90C9ACF92C58130E4837AEA9B32FEAF666D23F264F4FEC6C044541B4267F00BCD03D89205D0F0470FFA74BEC183E7AB08C3ECDC8E0B9073A5B45F5C4A7AAF905127AD7C6D6F005FB8667D8CAE6B360F4BDE1419A9148B08C032152D1DAF790773DF1C1D055CDD076D70DBF7F75D48389B2B2421360C4351D08B5D9D66C2CF3AB546DF9B353542D9C49469B78DD972C1AA15D9002E1EED0DC2DB308CDEFB73E65902CDCC3FB99C67BABE6991E96C96586EE1B6B70FEA334D9986987FA5A230D593937D81369DE52E0097DB110FA30716792E61AF78E02913959124A36A31B41BB81C0578D3C320B6C93232E29A6C2ED4422D8FE064D4121B113F3FB24C6A7E267714F4C4DD4B16A6A14B610906DE99346052C7FD00560E6222142FB5C5134AA51060DDAF6E65679DF1'
};




  return agent
          .get(url)
          .set(headers)
          .then(res => res.text)
          .catch(err => err)
}
