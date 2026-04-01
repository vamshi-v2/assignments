// import pkg from "pg";
import { Pool } from "pg";
import  dotenv  from "dotenv";
// const {Pool} = pkg;
dotenv.config();

const pool = new Pool({
    user: process.env.D_USER,
    host: process.env.D_HOST,
    database: process.env.D_DATABASE,
    password: process.env.D_PASSWORD,
    port: 5432,
    
})

pool.on("connect", ()=>{
    console.log("connection made with db")
});

export default pool;