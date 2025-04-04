import Pessoa from "../model/Pessoa.js";

export const listarPessoas = async(req, res) => {
    try{
        const pessoas = await Pessoa.findAll();
        res.status(200).json(pessoas);
    }
    catch(error){
        res.status(500).json({ error: "Erro ao listar pessoas" });
    }
}