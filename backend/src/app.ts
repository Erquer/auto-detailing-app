import express from 'express';
import {clients} from './Routes/Clients';

const {user, password} = require('../database.json');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {Sequelize} = require('sequelize');
export const sequelize = new Sequelize('postgres', user, password, {
    host: 'localhost',
    dialect: 'postgres'
});


const app = express();
const port = 3030;
app.get('/', (req, res) => {
    res.send('My work is done');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use('/clients', clients);