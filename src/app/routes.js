'use strict';
import express from 'express';
import productRoutes from './routes/product.route.js'

const routes = express.Router();

routes.use(productRoutes);

routes.get('/', (req, res) => {
    res.json({ message: 'Funcionando' });
});

export default routes;