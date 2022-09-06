'use strict';
import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())
app.use(routes);

app.listen(port, () => { 
    console.log(`... Server is running on port ${port}`)
});