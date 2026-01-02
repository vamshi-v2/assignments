import { Request, Response } from 'express';
import { User } from "../models/users";
import { Creds } from "../models/admin";

// Home page - redirect to users list
const home = async (_req: Request, res: Response) => {
    res.redirect('/login');
};

// Admin Login
const login = async (req: Request, res: Response) => {
    try {
        req.session.isLogin=false;
        res.render('./users/login')
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle Admin Login 
const submitLogin = async (req: Request, res: Response) => {
    try {
        const { userName, password } = req.body;
        const admin = await Creds.findOne({ where : { userName } })
        // console.log("after db check")
        if (admin=== null){
            console.log( "user doesn't exist" )
            res.render( './users/login', { message : "User doesn't exist" })
        }else if ( admin ) {
            if(password == admin.password){
                req.session.isLogin=true;
                const users = await User.findAll();
                res.render( './users/list', { users:users, message: "User logged in"} )
            }else{
                res.render( './users/login', { message : "Wrong password"} )
                console.log( "wrong password" )
            }
        } else {
            console.log("somthing went wrong")
            res.redirect('/users/login')   
        }
    } catch (error: any) {
        console.log(error)
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
        res.render('./users/create');
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle create form submission
const submitCreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }
        const user = await User.create({ name, email });
        res.redirect('/users');
    } catch (error: any) {
        return res.render( './users/create' ,{ message: error.message });
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
        res.redirect('/users');
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
        res.render('./users/list', { users: users, message: "User deleted successfully"});
    } catch (error: any) {
        return res.render('./users/list', { users: allUsers, message: "User doesn't exist" });
    }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getUsers, submitCreateUser, submitUpdateUser, home, login, submitLogin } 