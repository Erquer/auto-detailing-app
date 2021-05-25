// import {DataTypes, ModelDefined} from "sequelize";
const dbConfig = require("../config/db.config.js");



const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


export const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    clients: require('Client.model')(sequelize, Sequelize)
};



