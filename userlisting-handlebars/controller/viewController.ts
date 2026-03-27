import { Request, Response } from 'express';
import { User } from "../models/users";


// Home page - redirect to users list
const home = async (_req: Request, res: Response) => {
    res.redirect('/users');
};

// List all users
const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        console.log(users);
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
        return res.status(500).json({ message: error.message });
    }
};

// Show single user
const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('./users/show', { user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Show edit form
const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('./users/edit', { user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle update form submission
const submitUpdateUser = async (req: Request, res: Response) => {
    try {
       const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const {name, email} = req.body;
        await user.update({name,email})
        res.redirect('/users'); 
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Handle delete
const deleteUser = async (req: Request, res: Response) => {
    try {
        // await User.destroy({
        //     where: { id: req.params.id }
        // });
        // res.redirect('/users');
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await user.destroy();
        res.redirect('/users');
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getUsers, submitCreateUser, submitUpdateUser, home } 