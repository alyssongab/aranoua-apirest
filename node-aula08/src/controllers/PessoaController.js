import Pessoa from "../model/Pessoa.js";
import Cidade from "../model/Cidade.js";
import Estado from "../model/Estado.js";

// listar pessoas
export const listarPessoas = async(req, res) => {
    try{
        const pessoas = await Pessoa.findAll({
            include: { 
                model: Cidade, 
                as: 'cidade',
                include: { 
                    model: Estado, 
                    as: 'estado'
                }
            }
        });

        // Personalizar a resposta para incluir apenas os nomes de cidade e estado
        const response = pessoas.map((pessoa) => ({
            id: pessoa.id,
            nome: pessoa.nome,
            telefone: pessoa.telefone,
            email: pessoa.email,
            cidade: pessoa.cidade.nome,
            estado: pessoa.cidade.estado.nome
        }));
        res.status(200).json(response);
    }
    catch(error){
        console.error(error)
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
