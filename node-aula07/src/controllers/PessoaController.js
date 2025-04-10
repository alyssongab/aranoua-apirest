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

// lista pessoa por id
export const listaPessoaId = async(req, res) => {
    try{
        const pessoa = await Pessoa.findByPk(req.params.id);
        res.status(200).json(pessoa);
    }
    catch(error){
        res.status(404).json({error: "Pessoa não encontrada."});
    }
}

// atualiza pessoa
export const atualizaPessoa = async(req, res) => {
    try{
        const pessoa = await Pessoa.findByPk(req.params.id);
        pessoa.update(req.params.body);
        res.status(201).json(pessoa);
    }
    catch(error){
        res.status(404).json({error: "Pessoa não encontrada."});
    }
}