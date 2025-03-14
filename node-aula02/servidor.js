import http from 'http';

// *********  function declaration
// function inicioServidor(req, res){
//     console.log('Chamada');
//     res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
//     res.end("resposta para navegador - browser");
// }

// ********* function expression
const inicioServidor = function(req, res){
    console.log('Chamada');
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("resposta para navegador - browser");
}

// ********* arrow function
// const inicioServidor = (req, res) => {
//     console.log('Chamada');
//     res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
//     res.end("resposta para navegador - browser");
// }

const server = http.createServer(inicioServidor);

server.listen(3000, () => {
    console.log("servidor iniciado");
});