import Pessoa from "../model/Pessoa.js";

// listar pessoas
export const listarPessoas = async(req, res) => {
    try{
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    }
    catch(error){
        res.status(500).json({ error: "Erro ao listar pessoas" });
    }
};

// criar pessoa
export const criarPessoa = async(req, res) => {
    try{
        const novaPessoa = await Pessoa.create(req.body);
        res.status(201).json(novaPessoa);
    }
    catch(error) {
        res.status(400).json({error: "Erro ao criar pessoa.", detalhes: error});
    }
};