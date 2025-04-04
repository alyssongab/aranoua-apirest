import express from "express";
import {
    listarPessoas
} from "../controllers/PessoaController.js";

const router = express.Router();

// rotas para pessoas
router.get('/', listarPessoas); // lista todas as pessoas
// localhost:3000/pessoas

export default router;