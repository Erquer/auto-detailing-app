import {DataTypes, ModelDefined} from "sequelize";

export interface ClientAttributes {
    id: number;
    name: string;
    surname: string;
}

export  interface ClientAddAttributes {
    name: string;
    surname: string
}
export const ClientModel = (sequelize, Sequelize) => {
    const Client: ModelDefined<ClientAttributes, ClientAddAttributes> = sequelize.define(
        'Client',
        {
            id: {
                type: Sequelize.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(30),
                defaultValue: 'Gal'
            },
            surname: {
                type: Sequelize.STRING(30),
                defaultValue: 'Anonim'
            }
        },
        {
            tableName: 'Clients'
        }
    );
    return Client;
}