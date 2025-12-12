import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import createStuTable from "./data/createStuTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api", userRoutes);

// error handling
const errorHandling = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: "Server Error",
        error: err.message,
    })
}
app.use(errorHandling);

//table creation
createStuTable();

//testing db
app.get("/", async (req, res) => {
    const result = await pool.query("select * from student");
    console.log(result.rows);
    res.send(result.rows);
})

//opening connection with database
app.post("/api/start", async (req, res) => {
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
app.delete("/api/end", async (req, res) => {
    await pool.end();
    console.log("pool closed");
    res.send(JSON.stringify("Connection ended"));
})

app.listen(port, () => {
    console.log(`The server is running on  http://localhost:${port}`);
})