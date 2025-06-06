import express from 'express';
import { getWeatherCity } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/', getWeatherCity);
export default router;