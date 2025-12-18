"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const { Pool } = require("pg");
// const {Pool} = pkg;
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
console.log(process.env.D_PASSWORD);
const pool = new Pool({
    user: process.env.D_USER,
    host: process.env.D_HOST,
    database: process.env.D_DATABASE,
    password: process.env.D_PASSWORD,
    port: 5432,
});
pool.on("connect", () => {
    console.log("connection made with db");
});
module.exports = pool;
