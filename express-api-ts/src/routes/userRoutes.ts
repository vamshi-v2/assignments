import express = require("express");
const { createStudent, deleteStudent,  getStudentById, updateStudent, getAllStudent } = require( "../controller/apiContoller");
const router = express.Router();

router.get("/student", getAllStudent);
router.get("/student/:id", getStudentById);
router.post("/student", createStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

module.exports = router;