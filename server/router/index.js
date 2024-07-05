import { Router } from "express";
import userController from "../controllers/user-controller.js";

const router = new Router();

router.post("/registration", userController.registration);
router.post("/login");
router.post("/logout");
router.get("/activate/:link");
router.get("/refresh");
router.get("/users", userController.getUsers);

export default router;
