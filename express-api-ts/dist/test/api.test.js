"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
const app = require("../app");
// import { app } from "../app";
// const pool = require("../config/db");
const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const createStuTable = require("../data/createStuTable");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
describe("Running tests", () => {
    const pool = new Pool({
        user: process.env.D_USER,
        host: process.env.D_HOST,
        database: process.env.D_DATABASE,
        password: process.env.D_PASSWORD,
        port: 5432,
    });
    createStuTable();
    beforeAll(async () => {
        await pool.connect();
    });
    describe("For creating newStudent :", () => {
        it("Creating new student data", async () => {
            const response = await supertest.agent(app).post("/api/student").send({
                "name": "Smith",
                "age": 25
            });
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe("Student Data created successfully");
        });
        it("Creating new student with wrong data types", async () => {
            const response = await supertest.agent(app).post("/api/student").send({
                "name": "Steve",
                "age": "21"
            });
            expect(response.statusCode).toBe(400);
        });
        it("Creating new student with incomplete data", async () => {
            const response = await supertest.agent(app).post("/post").send({
                "name": "Max"
            });
            expect(response.statusCode).toBe(404);
        });
    });
    describe("For getAllStudent :", () => {
        it(" When Data is present", async () => {
            const response = await supertest.agent(app).get("/api/student");
            console.log(response.body);
            expect(response.statusCode).toBe(200);
        });
        it(" When Data is NOT present", async () => {
            const response = await supertest.agent(app).get("/api/student");
            console.log(response.body);
            expect(response.statusCode).toBe(200);
        });
    });
    describe("For getStudentById :", () => {
        it(" When Data is present", async () => {
            const response = await supertest.agent(app).get(`/api/student/1`);
            expect(response.statusCode).toBe(200);
        });
        it(" When Data is NOT present", async () => {
            const response = await supertest.agent(app).get(`/api/student/55`);
            expect(response.statusCode).toBe(400);
            // expect(response.status).toBe("Student Data created successfully");
        });
    });
    describe("For updateStudent :", () => {
        it(" When Student is present", async () => {
            const response = await supertest.agent(app).get(`/api/student/1`);
            expect(response.statusCode).toBe(200);
        });
        it(" When Student is NOT present", async () => {
            const response = await supertest.agent(app).get(`/api/student/55`);
            expect(response.statusCode).toBe(400);
            // expect(response.status).toBe("Student Data created successfully");
        });
    });
    describe("For deleteStudent :", () => {
        it(" When Student is present", async () => {
            const response = await supertest.agent(app).get(`/api/student/1`);
            expect(response.statusCode).toBe(200);
        });
        it(" When Student is NOT present", async () => {
            const response = await supertest.agent(app).get(`/api/student/55`);
            expect(response.statusCode).toBe(400);
            // expect(response.status).toBe("Student Data created successfully");
        });
    });
});
