import { DataTypes, Model } from "sequelize";

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
                estado: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                }
            },
            {
                sequelize,
                modelName: 'Cidade',
                tableName: 'cidades',
                timestamps: true
            }
        );
    }
}

export default Cidade;