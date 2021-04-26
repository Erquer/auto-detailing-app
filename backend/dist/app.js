"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'Polsat131', {
    host: 'localhost',
    dialect: 'postgres'
});
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('My work is done');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
//# sourceMappingURL=app.js.map