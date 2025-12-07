import express from "express";
import { createNode, deleteNode, getAllNotes, updateNode, getNoteById } from "../controllers/noteControllers.js";

const router = express.Router();

router.get("/",getAllNotes);

router.get("/:id",getNoteById);

router.post("/",createNode);

router.put("/:id",updateNode);

router.delete("/:id",deleteNode);

export default router;


