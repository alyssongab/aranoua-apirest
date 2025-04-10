import express from "express";
import {
    listarPessoas,
    criarPessoa,
    listaPessoaId,
    atualizaPessoa
} from "../controllers/PessoaController.js";

const router = express.Router();

// rotas para pessoas
router.get('/', listarPessoas); // lista todas as pessoas
router.post('/', criarPessoa); // cria pessoa
router.get('/:id', listaPessoaId); // lista pessoa por Id
router.put('/:id', atualizaPessoa); // atualiza pessoa por Id

// localhost:3000/pessoas

export default router;