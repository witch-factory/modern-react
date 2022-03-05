import http from 'http';

const port=process.env.PORT || 3000;
const server=http.createServer((req, res)=>{
  const path=req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  //쿼리스트링 모두 무시

  switch(path){
    case "":
      res.writeHead(200, {'Content-Type':'text/plain'})
      res.end('Home Page')
      break
    case '/about':
      res.writeHead(200, {'Content-Type':'text/plain'})
      res.end('About')
      break
    default:
      res.writeHead(200, {'Content-Type':'text/plain'})
      res.end('Not Found')
      break
  }

})

server.listen(port, ()=>console.log(`server started on port ${port}`))