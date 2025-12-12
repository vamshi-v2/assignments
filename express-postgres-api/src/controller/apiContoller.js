import { createStudent_func, 
    getAllStudent_func, 
    getStudentById_func, 
    deleteStudent_func,
    updateStudent_func } from "../models/studentModel.js";

const handleResponse = (res, status, message, data = null)=>{
    res.status(status).json({
        status,
        message,
        data,
    });
}

export const createStudent = async (req, res, next) => {
    const{ name, age} = req.body;
    try {
        const newStudent = await createStudent_func( name, age);
        handleResponse(res, 201, "Student Data created successfully", newStudent);
    } catch (err) {
        next(err);
    }
}

export const getAllStudent = async (req, res, next) => {
    try {
        console.log("hello");
        const students = await getAllStudent_func();
        console.log("students",students)
        handleResponse(res, 200, "Data retrived", students);
    } catch (err) {
        next(err);
    }
}

export const getStudentById = async (req, res, next) => {
    try {
        const student = await getStudentById_func(req.params.id);
        if(!student) return handleResponse(res, 404, "Student not found");
        handleResponse(res, 200, "Student Data created successfully", student);

    } catch (err) {
        next(err);
    }
}

export const updateStudent = async (req, res, next) => {
    const {name,age} =  req.body;
    try {
        const updatedStudent = await updateStudent_func(req.params.id, name, age);
        if(!updatedStudent) return handleResponse(res, 404, "Student not found");
        handleResponse(res, 200, "Student Data updated successfully", updatedStudent);
    } catch (err) {
        next(err);
    }
}

export const deleteStudent = async (req, res, next) => {
    try {
        const deletedStudent = await deleteStudent_func(req.params.id);
        console.log(deletedStudent);
        if(!deletedStudent) return handleResponse(res, 404, "Student not found");
        handleResponse(res, 200, "Student Data deleted successfully", deletedStudent);
    } catch (err) {
        next(err);
    }
}
