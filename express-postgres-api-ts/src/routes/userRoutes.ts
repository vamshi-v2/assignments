import  express  from "express"
import { getAllStudent } from "../controller/apiContoller.js";

import { createStudent, deleteStudent,  getStudentById, updateStudent } from "../controller/apiContoller.js";
const router = express.Router();

router.get("/student", getAllStudent);
router.get("/student/:id", getStudentById);
router.post("/student", createStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

export default router;