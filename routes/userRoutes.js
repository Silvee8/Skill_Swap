import express from "express";
import {createUser, getUsers} from "../controllers/userController.js";

const router = express.Router(); //creates a mini express app

router.post("/", createUser); //Post/api/users
router.get("/", getUsers);

export default router;

