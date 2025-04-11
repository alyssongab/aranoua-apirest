import { DataTypes, Model } from "sequelize";
import Estado from "./Estado.js";

class Cidade extends Model {
    static initModel(sequelize) {
        Cidade.init(
            {
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                ibge: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                estado_id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    references: {
                        model: Estado,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                modelName: 'Cidade',
                tableName: 'cidades',
                timestamps: true
            }
        );

        Cidade.belongsTo(Estado, {
            foreignKey: 'estado_id',
            as: 'estado'
        });
    }
}

export default Cidade;