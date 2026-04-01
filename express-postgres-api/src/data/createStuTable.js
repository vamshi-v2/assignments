import pool from "../config/db.js";

const createStuTable = async () =>{
    const queryText =  `CREATE TABLE IF NOT EXISTS student (
    id SERIAL PRIMARY KEY,          
    name VARCHAR(100) NOT NULL,     
    age INT CHECK (age > 0)        
    );
    `;
    try {
        pool.query(queryText);
        console.log("Student table created")
    } catch (error) {
        console.log("Error creating student table :". error)
    }
};

export default createStuTable;