import { Sequelize } from 'sequelize';

// config do sqlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: true,
});

export default sequelize;