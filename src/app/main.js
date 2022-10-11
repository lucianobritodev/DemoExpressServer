'use strict';
import env from 'dotenv';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';

env.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(routes);

app.listen(port, () => { 
    console.log(`... Server is running on port ${port}`)
});