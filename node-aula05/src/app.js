import express from 'express';
import db from '../database.js';

const app = express();

// middleware: express.json()
app.use(express.json());


// rota home
app.get('/', (req, res) => {
    res.status(200).send("/home - express");
});


// endpoint cidades com get all
app.get('/cidades', (req, res) => {

    const sql = "SELECT id,nome FROM cidades";

    // para trabalhar com varias linhas
    db.all(sql, (err, rows) => {
        if(err){
            console.error('Erro ao listar cidades', err.message);
            return res.status(500).json({error: 'Erro ao listar cidades'});
        }

        // DTO - "Encapsula" os dados para transferencia
        const jsonSaida = rows.map(elemento => ({
            id: elemento.id,
            nome: elemento.nome
        }));

        res.status(200).json(jsonSaida);
    });

});

// endpoint cidades com get/id
app.get('/cidades/:id', (req, res) => {

    const sql = "SELECT id,nome FROM cidades WHERE id = " + req.params.id;

    // para trabalhar com varias linhas
    db.get(sql, (err, row) => {
        if(err){
            console.error('Erro ao buscar cidade', err.message);
            return res.status(500).json({error: 'Erro ao buscar cidade'});
        }

        // Se nao houver cidade com o id especificado
        if(!row){
            console.error("Cidade não encontrada.");
            return res.status(404).json({
                error: "Cidade não encontrada"
            });
        }

        // DTO - "Encapsula" os dados para transferencia
        const jsonSaida = 
        {
            id: row.id,
            nome: row.nome
        }

        res.status(200).json(jsonSaida);

    });
});

// endpoint cidades usando post
app.post('/cidades', (req, res) => {
    console.log(req.body);
    
    const nome = req.body.nome;

    // valida
    if(!nome){
        return res.status(400).json({error: 'Nome da cidade é obrigatório'});
    }

    // sql
    const sql = "INSERT INTO cidades (nome) VALUES('"+nome+"');";

    db.run(sql, function(err) {
        if(err){
            console.error('Erro ao inserir cidade', err.message);
            return res.status(500).json({error: 'Erro ao inserir cidade'});
        }
        // caso nao tenha erro
        res.status(201).json({
            id: this.lastID,
            nome 
        });
    });

});

// endpoint cidades com put
app.put('/cidades/:id', (req, res) => {


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