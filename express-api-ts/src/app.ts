import type { Request, Response, NextFunction } from 'express';
const  express = require ("express");
const  dotenv  = require ("dotenv");
const { pool } = require ("./config/db.js");
const  userRoutes  = require ("./routes/userRoutes.js");
const  createStuTable  =  require ("./data/createStuTable");

dotenv.config();

const app = express();

app.use(express.json());

//routes
app.use("/api", userRoutes);

// error handling
const errorHandling = (err: any, req:Request, res:Response, next:NextFunction):void => {
    console.error(err);
    res.status(500).json({
        status: 500,
        message: "Server Error",
        error: err,
    })
}
app.use(errorHandling);

//table creation
createStuTable();

//testing db
app.get("/", async (req:Request, res:Response) => {
    const result = await pool.query("select * from student");
    console.log(result.rows);
    res.send(result.rows);
})

//opening connection with database
app.post("/api/start", async (req:Request, res:Response) => {
    const client = await pool.connect();
    try {
        console.log("pool opened");
        res.send(JSON.stringify("Connected successfully"));
    } catch (err) {
        console.error('Query error:', err);
    } finally {
        client.release();
    }
})

//closing the connection with database
app.delete("/api/end", async (req:Request, res:Response) => {
    await pool.end();
    console.log("pool closed");
    res.send(JSON.stringify("Connection ended"));
})

module.exports = app;
