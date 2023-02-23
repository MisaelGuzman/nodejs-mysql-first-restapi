import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmmployee,
  deleteEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmmployee);

router.delete("/employees/:id", deleteEmployee);

export default router;
