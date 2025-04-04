import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Pessoa extends Model {}

Pessoa.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false // campo obrigatorio
        },
        
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoas',
        timestamps: true
    }
);

export default Pessoa;