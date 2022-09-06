'use strict';
import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Funcionando');
});

export default routes;