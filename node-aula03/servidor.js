import http from 'http';

// ********* function expression
const inicioServidor = function(req, res){
    console.log('Chamada');
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    console.log("URL:" + req.url);
    console.log("ROTA:" + rotas[req.url]);
    res.end("Requisição atendida: "+ rotas[req.url]);
}

const server = http.createServer(inicioServidor);

const rotas = {
    ":/" : "Home",
    "/cidades" : "Cidades",
    "/pessoas" : "Pessoas"
}

server.listen(3000, () => {
    console.log("servidor iniciado");
});