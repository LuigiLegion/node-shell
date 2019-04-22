const request = require('request');


module.exports = function (url){
    // console.log(request)
    // const http = request('http');
    request.get(url, (res) =>
        console.log(res)
    )
}
