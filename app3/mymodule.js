function createServer(render,port=8000){
    const http = require('http')
    http.createServer(render).listen(port)
}
class Random{
    getInteger(min,max){
        return min+Math.floor((Math.random()*(max-min)))
    }
}
module.exports.createServer=createServer
module.exports.Random = Random