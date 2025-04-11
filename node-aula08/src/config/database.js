import { Sequelize } from 'sequelize';
import Pessoa from '../model/Pessoa.js';
import Cidade from '../model/Cidade.js';
import Estado from '../model/Estado.js';

// config do sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});


// inicializar os modelos

Estado.initModel(sequelize);
Cidade.initModel(sequelize);
Pessoa.initModel(sequelize);

export default sequelize;