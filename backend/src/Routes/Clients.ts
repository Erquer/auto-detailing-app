import {Router} from "express";
import {ClientModel} from '../Model/ClientModel';

export const clients = Router();

clients.post('/', async (req, res, next) => {
    try {
        const client = await ClientModel.create(req.body);
        res.status(201).json(client);
    } catch (e) {
        next(e);
    }
});

clients.get('', async (req, res, next) =>{
    try {
        res.json(await ClientModel.findAll());
    }catch (e){
        next(e);
    }
})