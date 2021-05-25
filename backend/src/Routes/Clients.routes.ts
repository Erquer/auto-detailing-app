module.exports = app => {
    const Clients = require("../Contollers/Client.controller");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", Clients.create);

    // Retrieve all Tutorials
    router.get("/", Clients.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", Clients.findOne);

    // Update a Tutorial with id
    router.put("/:id", Clients.update);

    // Delete a Tutorial with id
    router.delete("/:id", Clients.delete);

    // Create a new Tutorial
    router.delete("/", Clients.deleteAll);

    app.use('/api/clients', router);
};