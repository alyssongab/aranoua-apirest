import express from 'express';
import pessoaRoutes from './routes/PessoaRoutes.js';
import sequelize from './config/database.js';

const app = express();

// middleware
app.use(express.json());

// rotas
app.use('/api/pessoas', pessoaRoutes);

// inicializar banco de dados
sequelize
//  .sync({ force:true })
    .sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch((error) => console.error("Erro ao sincronizar banco de dados", ))

export default app;