import express from 'express';
import { getPlaces } from '../controllers/tripMapController.js';

const router = express.Router();

router.get('/', getPlaces);
export default router; 


