import pool from "../config/db.js";

export const getAllStudent_func = async ()=>{
    const result = await pool.query("select * from student");  
    console.log(result.rows);
    return result.rows;
};

export const getStudentById_func = async (id)=>{
    const result = await pool.query("select * from student where id =$1", [id]);
    console.log(result);
    return result.rows[0];
};

export const createStudent_func = async ( name, age)=>{
    const result = await pool.query(`insert into student ( name, age) values ($1, $2 ) returning *`, [ name, age] );
    console.log(result);
    return result.rows[0];
};

export const deleteStudent_func = async (id)=>{
    const result = await pool.query("delete from student where id = $1 returning *",[id]);
    console.log("deleted:",result.rows);
    return result.rows[0];

};
export const updateStudent_func = async (id,name, age)=>{
    const result = await pool.query("update student set name = $1, age = $2 where id = $3 returning *",[name, age, id]);
    console.log(result);
    return result.rows [0];
};