import express from "express";
import { registerController } from "../Controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/register", registerController);

export default authRoute;
