import { Sequelize } from 'sequelize';
import Pessoa from '../model/Pessoa.js';
import Cidade from '../model/Cidade.js';

// config do sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});


// inicializar os modelos
Cidade.initModel(sequelize);
Pessoa.initModel(sequelize);

export default sequelize;