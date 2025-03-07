import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("resposta para navegador");
});

server.listen(3000, () => {
    console.log("servidor iniciado");
});