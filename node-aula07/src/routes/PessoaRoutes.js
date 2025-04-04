import express from "express";
import {
    listarPessoas,
    criarPessoa
} from "../controllers/PessoaController.js";

const router = express.Router();

// rotas para pessoas
router.get('/', listarPessoas); // lista todas as pessoas
router.post('/', criarPessoa); // cria pessoa
// localhost:3000/pessoas

export default router;