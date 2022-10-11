import { Router } from "express";
import Product from "../entities/product.entity.js";
const productRoutes = Router();

productRoutes.get('/products/:id', (req, res, next) =>{
    return res.json({
        id: req.params['id'],
        message: "Nova rota funcionando"
    });
})

productRoutes.get('/products', (req, res, next) =>{
    return res.json({message: "Nova rota funcionando", produto: Product});
})

export default productRoutes;