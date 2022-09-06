'use strict';
import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: 'Funcionando' });
});

export default routes;