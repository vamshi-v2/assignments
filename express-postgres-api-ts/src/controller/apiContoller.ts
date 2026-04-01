import type { NextFunction } from "express";
import  { type Request, type Response } from "express";
import { createStudent_func, 
    getAllStudent_func, 
    getStudentById_func, 
    deleteStudent_func,
    updateStudent_func } from "../models/studentModel.js";

const handleResponse = <T> (res :Response, status: number, message: string, data : T |null):Response =>{
    return res.status(status).json({
        status,
        message,
        data,
    });
}

export const createStudent = async (req: Request, res:Response, next: NextFunction) => {
    const{ name, age} = req.body;
    try {
        const newStudent = await createStudent_func( name , age);
        handleResponse(res, 201, "Student Data created successfully", newStudent);
    } catch (err) {
        next(err);
    }
}

export const getAllStudent = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const everyStudents  = await getAllStudent_func();
        console.log("students",everyStudents)
        handleResponse(res, 200, "Data retrived", everyStudents);
    } catch (err) {
        next(err);
    }
}

export const getStudentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const student = await getStudentById_func(Number(id));
        if(!student) {
             handleResponse(res, 404, "Student not found", null)};
        handleResponse(res, 200, "Student Data created successfully", student);

    } catch (err) {
        next(err);
    }
}

export const updateStudent = async (req:Request, res: Response, next: NextFunction) => {
    const {name ,age } =  req.body;
    try {
        const { id } = req.params;       
        const updatedStudent = await updateStudent_func(Number(id) , name, age);
        if(!updatedStudent) return handleResponse(res, 404, "Student not found", null);
        handleResponse(res, 200, "Student Data updated successfully", updatedStudent);
    } catch (err) {
        next(err);
    }
}

export const deleteStudent = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const { id } = req.params;    
        const deletedStudent = await deleteStudent_func(Number(id));
        console.log(deletedStudent);
        if(!deletedStudent) return handleResponse(res, 404, "Student not found", null);
        handleResponse(res, 200, "Student Data deleted successfully", deletedStudent);
    } catch (err) {
        next(err);
    }
}
