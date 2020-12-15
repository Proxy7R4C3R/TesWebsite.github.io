const http = require('http')
const fs = require('fs')
const port = 80

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html',function(error,data){

        if (error) {
            res.writeHead(404)
            res.write('Content Not Found')
        }else {
            res.write(data)
        }
        res.end()
    })
    
})


server.listen(port, function(error){

    if(error){

        console.log('Something Failed',error)
    }else {
        console.log('Server is Listning on' + port)
    }
    
})