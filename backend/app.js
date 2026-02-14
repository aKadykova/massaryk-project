import express from 'express';
import cors from 'cors';
import nodesRoutes from './api/routes/nodes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', nodesRoutes);

export default app;

