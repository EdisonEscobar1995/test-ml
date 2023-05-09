import express from 'express';
import itemController from '../controllers/itemController.js';

const router = express.Router();

router.get('/items', itemController.search);
router.get('/items/:id', itemController.getDetail);

export default router;