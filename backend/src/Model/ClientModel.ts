import {DataTypes, ModelDefined} from "sequelize";
import {sequelize} from "../app";




export interface ClientAttributes {
    id: number;
    name: string;
    surname: string;
}

export  interface ClientAddAttributes {
    name: string;
    surname: string
}

export const ClientModel: ModelDefined<ClientAttributes, ClientAddAttributes> = sequelize.define(
    'Client',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            defaultValue: 'Gal'
        },
        surname: {
            type: DataTypes.STRING(30),
            defaultValue: 'Anonim'
        }
    },
    {
        tableName: 'Clients'
    }
)
