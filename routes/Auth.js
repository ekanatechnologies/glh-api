import express from "express";
import { Register,Login,getUserByAccount,addAccount } from "../controllers/auth.js";

const router = express.Router();


router.route('/register').post(Register)
router.route('/login').post(Login)
router.route('/add-account').post(addAccount)
router.route('/:currentAccount').get(getUserByAccount)


export default router;
