import { Router } from "express";
import { Project } from "../controllers";

const router = Router();

router.post("/", Project.createProject);

export default router;
