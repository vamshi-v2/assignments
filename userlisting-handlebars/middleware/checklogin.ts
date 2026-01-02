import { Request, Response, NextFunction } from 'express';

const isLogged = async (req: Request, res:Response, next: NextFunction) => {
    if (req.session.isLogin) {        
        next(); 
    } else {
        res.redirect('/login'); 
    }
}

module.exports = { isLogged }