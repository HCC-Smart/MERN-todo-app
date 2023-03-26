import express from 'express';
import {AddItem, deleteItem, getAllitems, updateItems } from '../controller/itemController.js';

const router = express.Router();

router.post("/add-item", AddItem);
router.get("/get-item", getAllitems);
router.post("/update-item/:_id", updateItems);
router.delete("/delete-item/:_id", deleteItem);

export default router