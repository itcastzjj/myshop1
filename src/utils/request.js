
function myget(url,method='GET'){
    return new Promise((resolve)=>{
        wx.request({
            url,
            method,
            success:res=> {
                resolve(res)
            }
          })
    })
}
export default myget;



   