import express from "express";
import { logOut, profile, signIn, signUp } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.post("/logout",logOut);
router.route("/profile").get( protect ,profile);

export default router;