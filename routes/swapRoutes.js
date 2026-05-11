import express from "express";
import {createSwap, updateSwapStatus} from "../controllers/swapController.js";

const router = express.Router();

router.post("/", createSwap);// POST /api/swaps
router.put("/:id", updateSwapStatus); // PUT /api/swaps/:id

export default router;




