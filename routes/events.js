import express from "express";
import { getEvents,createEvent } from "../controllers/events.js";

const router=express.Router();


router.route('get').get(getEvents);
router.route('/create').post(createEvent);

export default router;