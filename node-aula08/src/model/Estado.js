import { DataTypes, Model } from "sequelize";

class Estado extends Model{
    static initModel(sequelize){
        Estado.init(
            {
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                sigla: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        len: [2,2] // exatamente 2 caracteres
                    }
                }

            },
            {
                sequelize,
                modelName: 'Estado',
                tableName: 'estados',
                timestamps: true
            }
        )
    }
}

export default Estado;