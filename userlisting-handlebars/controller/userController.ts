import { Request, Response } from "express";
import { User } from "../models/users";


// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//     'postgres',
//     'admin',
//     'root',
//     {
//         host: 'localhost',
//         dialect: 'postgres',
//         pool: {
//             max: 5,        // Max active connections
//             min: 0,        // Allow pool to drop to 0
//             idle: 1000,    // Close connection after 1 second of inactivity
//             evict: 1000    // Check for idle connections every 1 second
//         }
//     }
// );

// async function run() {
//     try {
//         await sequelize.authenticate();
//     } catch (err) {
//         console.log("Error in Database Connection.");
//         throw err;
//     }
// }

// Create a new user 
const createUser = async (req: Request, res: Response) => {
    try {
        // await run();
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }
        const user = await User.create({ name, email });
        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
// Get all users 
const getUsers = async (_req: Request, res: Response) => {
    try {
        // await run();
        const users = await User.findAll({});
        return res.json(users);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
// Get user by ID 
const getUserById = async (req: Request, res: Response) => {
    try {
        // await run();
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.json(user);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
// Update user 
const updateUser = async (req: Request, res: Response) => {
    try {
        // await run();
        const { name, email } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.update({ name, email });
        return res.json(user);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
// Delete user 
const deleteUser = async (req: Request, res: Response) => {
    try {
        // await run();
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
        return res.status(204).send("User Deleted");
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

const main = async (req: Request, res: Response) => {
    try {
        let demo = {
            name: 'Rohan',
            age: 26
        }
        res.render("./layouts/main", { demo: demo });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = { createUser, getUserById, updateUser, deleteUser, getUsers, main } 