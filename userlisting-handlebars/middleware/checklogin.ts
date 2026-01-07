import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

const isLogged = async (req: Request, res: Response, next: NextFunction) => {
    // if (req.session.isLogin) {        
    //     next(); 
    // } else {
    //     res.redirect('/login'); 
    // }
    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
        res.redirect('/login');
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    (req as any).user = decoded;
    next();

}

module.exports = { isLogged }