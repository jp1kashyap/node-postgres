import * as express from "express";
import { AuthController } from "../controllers/auth.controller";
import { validateData } from "../middlewares/validation.middleware";
import { signUP } from "../validations/user.validation";
const Router=express.Router();

Router.post('/signup',validateData(signUP),AuthController.signup);

export {Router as AuthRouter};