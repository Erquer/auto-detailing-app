import { db } from '../Model/Models';

const Client =  db.clients;
const Op = db.Sequelize.Op;


//create and save a new Client
exports.create = (req, res) => {

}

// Retrieve all Client from the database.
exports.findAll = (req, res) => {
    Client.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving clients."
            })
        })

};

// Find a single Client with an id
exports.findOne = (req, res) => {

};

// Update a Client by the id in the request
exports.update = (req, res) => {

};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Client from the database.
exports.deleteAll = (req, res) => {

};


