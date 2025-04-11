import { DataTypes, Model } from "sequelize";
import Cidade from "./Cidade.js";

class Pessoa extends Model {
    static initModel(sequelize){
        Pessoa.init(
            {
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false
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
                },
                cidade_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    references: {
                        model: Cidade,
                        key: 'id'
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
        // associação com cidade
        Pessoa.belongsTo(Cidade, {
            foreignKey: 'cidade_id',
            as: 'cidade'
        });
    }
}

export default Pessoa;