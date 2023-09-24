const http = require('http')

const nodemon = require('nodemon')

const fs = require('fs')

const port = 3000


const server = http.createServer(function(req, respons){

    respons.writeHead(200, {'content-type' : 'text/html' })
    fs.readFile('index.html', function(error, data){

        if (error) {

            respons.writeHead(404)
            respons.write('error: file not exist')
            
        }else{

            respons.write(data);
            console.log("hello");
        }
        respons.end()
    })

    respons.write('hello hassan')
    respons.end()


})


server.listen(port, function(error){


    if(error){
        console.log('somthing went wrong', error);
    }else{
        
        console.log('server is working clean'  +  port);
    }
})