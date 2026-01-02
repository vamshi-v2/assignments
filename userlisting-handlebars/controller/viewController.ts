import { Request, Response } from 'express';
import { User } from "../models/users";
import { Creds } from "../models/admin";
const bcrypt = require('bcrypt');

// Home page - redirect to users list
const home = async (_req: Request, res: Response) => {
    res.redirect('/login');
};

// Admin Login
const login = async (req: Request, res: Response) => {
    try {
        req.session.isLogin = false;
        res.render('./users/login')
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle Admin Login 
const submitLogin = async (req: Request, res: Response) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ where: { name } })
        console.log({user})
        // console.log("after db check")
        if (user === null) {
            console.log("user doesn't exist")
            res.render('./users/login', { message: "User doesn't exist" })
        } else if (user) {
            const checkPass = await bcrypt.compare(password,user.password)
            // console.log(password)
            // console.log(user.password)
            // console.log( typeof checkPass)
            if ( checkPass) {
                req.session.isLogin = true;
                const users = await User.findAll();
                res.render('./users/list', { users: users, message: "User logged in" })
            } else {
                res.render('./users/login', { message: "Wrong password" })
                console.log("wrong password")
            }
        } else {
            console.log("somthing went wrong")
            res.redirect('/users/login')
        }
    } catch (error: any) {
        // console.log(error)
        return res.status(500).json({ message: error.message });
    }
};


// List all users
const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        // console.log(users);
        res.render('./users/list', { users });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Show create form
const createUser = async (req: Request, res: Response) => {
    try {
        res.render('./users/register');
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle create form submission 
const submitCreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password || !password2) {
            return res.status(400).json({ message: 'Every field is required' });
        }
        else if (password != password2) {
            console.log("password do not match")
            res.render("./users/register", { message: " password do not match" })
        } else {    
            let hashedpw = await bcrypt.hash(password, 8)
            await User.create({ name, email, password:hashedpw });
            res.render('./users/login',{message: "User registered successfully"});
        }
        console.log({
            name, email, password, password2
        })

    } catch (error: any) {
        return res.render('./users/register', { message: error.message });
    }
};

// Show single user
const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.render('./users/show', { user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
        // res.redirect('/users');
    }
};

// Show edit form
const updateUser = async (req: Request, res: Response) => {
    const users = await User.findAll();
    try {
        const user = await User.findByPk(req.params.id);
        res.render('./users/edit', { user });
    } catch (error: any) {
        return res.render('./users/list', { users: users, message: error.message });
    }
};

// Handle update form submission
const submitUpdateUser = async (req: Request, res: Response) => {
    const users = await User.findAll();
    try {
        const user = await User.findByPk(req.params.id);
        const { name, email } = req.body;
        await user.update({ name, email })
        res.render('./users/list', { users: users, message: "User updated successfully"});
    } catch (error: any) {
        return res.render('./users/list', { users: users, message: error.message });
    }
};

// Handle delete
const deleteUser = async (req: Request, res: Response) => {
    const allUsers = await User.findAll();
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        const users = await User.findAll();
        res.render('./users/list', { users: users, message: "User deleted successfully" });
    } catch (error: any) {
        return res.render('./users/list', { users: allUsers, message: "User doesn't exist" });
    }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getUsers, submitCreateUser, submitUpdateUser, home, login, submitLogin }