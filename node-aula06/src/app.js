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

    const sql = "SELECT id,nome,estado FROM cidades";

    // para trabalhar com varias linhas
    db.all(sql, (err, rows) => {
        if(err){
            console.error('Erro ao listar cidades', err.message);
            return res.status(500).json({error: 'Erro ao listar cidades'});
        }

        // DTO - "Encapsula" os dados para transferencia
        const jsonSaida = rows.map(elemento => ({
            id: elemento.id,
            nome: elemento.nome,
            estado: elemento.estado
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
            nome: row.nome,
            estado: row.estado
        }

        res.status(200).json(jsonSaida);

    });
});

// endpoint cidades usando post
app.post('/cidades', (req, res) => {
    console.log(req.body);
    
    const nome = req.body.nome;
    const estado = req.body.estado;

    // valida
    if(!nome){
        return res.status(400).json({error: 'Nome da cidade é obrigatório'});
    }

    // sql
    const sql = "INSERT INTO cidades (nome, estado) VALUES('"+nome+"','"+estado+"');";

    db.run(sql, function(err) {
        if(err){
            console.error('Erro ao inserir cidade', err.message);
            return res.status(500).json({error: 'Erro ao inserir cidade'});
        }
        // caso nao tenha erro
        res.status(201).json({
            id: this.lastID,
            nome,
            estado
        });
    });

});

// endpoint cidades com put
app.put('/cidades/:id', (req, res) => {

    console.log(req.body);
    
    const nome = req.body.nome;
    const estado = req.body.estado;

    // valida
    if(!nome){
        return res.status(400).json({error: 'Nome da cidade é obrigatório'});
    }

    // sql
    const sql = "UPDATE cidades SET nome = '"+nome+"',estado = '"+estado+"' WHERE id = "+req.params.id+";";

    db.run(sql, function(err) {
        if(err){
            console.error('Erro ao atualizar cidade', err.message);
            return res.status(500).json({error: 'Erro ao atualizar cidade'});
        }
        // caso nao tenha erro
        res.status(201).json({
            id: req.params.id,
            nome,
            estado
        });
    });
});

// endpoint cidades com delete
app.delete('/cidades/:id', (req, res) => {
    const sql = "DELETE FROM cidades WHERE id = "+req.params.id;

    db.run(sql, function(err) {
        if(err){
            console.error('Erro ao deletar cidade', err.message);
            return res.status(500).json({error: 'Erro ao deletar cidade'});
        }
        // caso nao tenha erro
        res.status(200).json({
            id: req.params.id
        });
    });
});

export default app;