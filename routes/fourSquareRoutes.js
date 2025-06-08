import express from 'express';
import getFourSquareData from '../controllers/fourSquareController.js';

const router = express.Router();
router.get('/', getFourSquareData)
export default router;