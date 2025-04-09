import { DataTypes, Model } from "sequelize";
import Cidade from "./Cidade.js";

class Pessoa extends Model {
    static initModel(sequelize){
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
        // associação com cidade
        Pessoa.belongsTo(Cidade, {
            foreignKey: 'cidade_id',
            as: 'cidade'
        });
    }
}

export default Pessoa;