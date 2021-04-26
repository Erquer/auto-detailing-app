import express from 'express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'Polsat131', {
    host: 'localhost',
    dialect: 'postgres'
});


const app = express();
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
} catch (error) {
    console.error('Unable to connect to the database:', error);
}