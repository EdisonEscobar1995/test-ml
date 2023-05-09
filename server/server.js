import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

app.use('/api', itemRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
