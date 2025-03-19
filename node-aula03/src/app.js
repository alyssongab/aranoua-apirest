import express from 'express';

const app = express();

const cidades = [
    {
        "id": 1,
        "nome": "Manaus"
    },
    {
        "id": 2,
        "nome": "Brasília"
    },
    {
        "id": 3,
        "nome": "Curitiba"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Express: Método GET na rota /home")
});

app.get('/cidades', (req, res) => {
    res.status(200).send(cidades);
});

export default app;