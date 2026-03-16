// "use strict"
// const http = require('http')
// const url = require('url')

// http.createServer(render).listen(8000)

// function render(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     let reqUrl = url.parse(req.url, true)

//     const {path, pathname, search, query} = reqUrl;

//     res.write(
//         `path: ${path} <br>
//         pathname: ${pathname} <br>
//         search: ${search} <br>`
//     )

//     for (const k in query){
//         res.write(`${k}: ${query[k]} <br>`)
//     }

//     res.end()
// }



// const http = require('http')
// const fs = require('fs')
// http.createServer(render).listen(8000)
// function render(req, res){
//     let url = req.url
//     url = (url.endsWith('/')) ? url : url+'/'
//     let fileName = ''
//     switch (url){
//         case'/':fileName += 'index3.html';break
//         case'/about/':fileName += 'about.html';break
//         case'/product/':fileName += 'product.html';break

//     }

//     fs.readFile(fileName,(error,content) => {
//         let ctype = {'Content-Type':'text/html'}
//         if(!error){
//             res.writeHead(200,ctype)
//             res.write(content)
//         }else{
//             res.writeHead(404,ctype)
//             res.write(error.message)
//         }
//         return res.end
//     })
// }




const myModule = require('./mymodule')
myModule.createServer(render)
function render(request,response){
    let r = new myModule.Random()
    response.write('Random number: '+r.getInteger(1,100))
    response.end()
}