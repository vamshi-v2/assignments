import  { Request, Response, NextFunction } from 'express';
const app = require("./app");
const { pool } = require ("./config/db");

const port = process.env.PORT || 5001;

// error handling
const errorHandling = (error: any, req:Request, res:Response, next:NextFunction):void => {
    console.log(error);
    res.status(500).json({
        status: 500,
        message: "Server Error",
        error: error,
    })
}
app.use(errorHandling);

//testing db
app.get("/", async (req:Request, res:Response) => {
    const result = await pool.query("select * from student");
    console.log(result.rows);
    res.send(result.rows);
})

// //opening connection with database
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

// //closing the connection with database
app.delete("/api/end", async (req:Request, res:Response) => {
    await pool.end();
    console.log("pool closed");
    res.send(JSON.stringify("Connection ended"));
})


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});