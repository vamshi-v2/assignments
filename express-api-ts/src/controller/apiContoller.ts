import type { NextFunction, Request, Response } from "express";
// import  { type Request, type Response } from "express";
const { createStudent_func, 
    getAllStudent_func, 
    getStudentById_func, 
    deleteStudent_func,
    updateStudent_func } = require("../models/studentModel");

const handleResponse = <T> (res :Response, status: number, message: string, data : T |null):Response =>{
    return res.status(status).json({
        status,
        message,
        data,
    });
}

 const createStudent = async (req: Request, res:Response, next: NextFunction) => {
    const{ name, age} = req.body;
    try {
        if( typeof name !== "string" || typeof age !== "number"){
            handleResponse(res, 400, "Enter correct datatype for name and age", null );
        }else{
        const newStudent = await createStudent_func( name , age);
        handleResponse(res, 201, "Student Data created successfully", newStudent);}
    } catch (err) {
        next(err);
    }
}

 const getAllStudent = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const everyStudents  = await getAllStudent_func();
        console.log("students",everyStudents)
        handleResponse(res, 200, "Data retrived", everyStudents);
    } catch (err) {
        next(err);
    }
}

 const getStudentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const student = await getStudentById_func(Number(id));
        if(!student) {
             handleResponse(res, 400, "Student not found", null)};
        handleResponse(res, 200, "Student Data created successfully", student);
    } catch (err) {
        next(err);
    }
}

 const updateStudent = async (req:Request, res: Response, next: NextFunction) => {
    const { name ,age } =  req.body;
    try {
        const { id } = req.params;  
        if( typeof name !== "string" || typeof age !== "number"){
            handleResponse(res, 400, "Enter correct datatype for name and age", null );
        }     
        const updatedStudent = await updateStudent_func(Number(id) , name, age);
        if(!updatedStudent) return handleResponse(res, 404, "Student not found", null);
        handleResponse(res, 200, "Student Data updated successfully", updatedStudent);
    } catch (err) {
        next(err);
    }
}

 const deleteStudent = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const { id } = req.params;    
        const deletedStudent = await deleteStudent_func(Number(id));
        console.log(deletedStudent);
        if(!deletedStudent) return handleResponse(res, 404, "Student not found", null);
        handleResponse(res, 204, "Student Data deleted successfully", deletedStudent);
    } catch (err) {
        next(err);
    }
}

module.exports={createStudent, deleteStudent, updateStudent, getStudentById, getAllStudent};