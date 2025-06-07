import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import weatherRoutes from './routes/weatherRoutes.js';
import geoNamesRoutes from './routes/geoNamesRoutes.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);
app.use('/api/places', geoNamesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});