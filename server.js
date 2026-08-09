const http=require('http');const fs=require('fs');const path=require('path');
const port=8080;const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const fp=path.join(__dirname,p);
  fs.readFile(fp,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not Found');return;}
    const ext=path.extname(fp).toLowerCase();
    res.writeHead(200,{'Content-Type':mime[ext]||'application/octet-stream'});
    res.end(data);
  });
});
server.listen(port,()=>{console.log('飞天神猪教服务器启动成功！http://localhost:'+port);});
