import express from 'express';

const app = express();

// middleware: express.json()
app.use(express.json());

// dados estaticos
const cidades = [
    {
        "id": 1,
        "cidade": "Eirunepé",
    },
    {
        "id": 2,
        "cidade": "Xique-Xique",
    },
    {
        "id": 3,
        "cidade": "Rolândia"
    }
];

// rota home
app.get('/', (req, res) => {
    res.status(200).send("/home - express");
});

// rota cidades com get
app.get('/cidades', (req, res) => {
    res.status(200).send(cidades);
});

// rota cidades (com id)
app.get('/cidades/:id', (req, res) => {

    const cidade = findCidade(req.params.id);

    if(cidade){
        res.status(200).send(cidade)
    }
    else{
        res.status(404).send({"error": "Não existe cidade com esse ID!"});
    }
});

// rota cidades com post
app.post('/cidades', (req, res) => {
    console.log(req.body);
    cidades.push(req.body);
    res.status(201).send(req.body);
});

// rota cidades com put
app.put('/cidades/:id', (req, res) => {
    const cidade = findCidade(req.params.id);
    cidade.cidade = req.body.cidade;
    res.status(200).send(cidade);
});

// rota cidades com delete
app.delete('/cidades/:id', (req, res) => {
    const cidadeDeletada = deleteCidade(req.params.id);
    res.status(200).send(cidadeDeletada);
});

// metodo para deletar cidade(s)
function deleteCidade(id){
    const indice = cidades.findIndex(elemento => elemento.id === Number(id));
    if(indice !== -1){
        const cidadesRemovidas = cidades.splice(indice, 1);
        return cidadesRemovidas[0];
    }
    return null;
}

// metodo para achar cidade por id
function findCidade(id){
    return cidades.find(elemento => elemento.id === Number(id)) || null;
}

export default app;