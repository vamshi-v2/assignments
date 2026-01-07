// import { Request, Response, NextFunction } from "express";

// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// const protect = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req. = decoded; // Attach user info to the request
//         next();
//     } catch (err) {
//         res.status(401).json({ message: 'Token is not valid' });
//     }
// };

// module.exports = protect;
