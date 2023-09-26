import express from "express";
import { deleteUser, logOut, profile, signIn, signUp, updateProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post("/signup",signUp);
router.post("/signin",signIn);
router.route("/profile").put( protect ,updateProfile );
router.post("/logout",logOut);
router.delete("/delete",protect,deleteUser)

export default router;