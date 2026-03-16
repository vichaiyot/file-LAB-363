//Program 1
// const http = require('http')
// const server = http.createServer(function(require,response){
//     response.write(`Server Test \nServer started on port ${port} \n Press <ctrl+c> to stop`)
//     response.end()
// })

// server.listen(8000)


//Program 2 
// const http = require('http')
// http.createServer(render).listen(8000)
// function render(require,response){
//     response.writeHead(200,{'Content-Type':'text/html'})

//     let html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <body>
//     <h1> test code in server</h1>
//     </head>
//     </body>
//     `
//     response.write(html)
//     response.end()
// }


//Program 3 

const http = require('http')
const fs = require('fs')
const {error} = require('console')
http.createServer(render).listen(8000)
function render(require,response){
    let ctype = { 'Content-Type':'text/html'}
        fs.readFile('main.html',(error,content) =>{
            if(!error){
                response.writeHead(200,ctype)
                response.write(content)
            }else{
                response.writeHead(404,ctype)
                response.write(error.message)
            }
            return response.end()
        })
    
}





