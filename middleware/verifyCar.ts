import { NextFunction, Request, Response } from 'express';

const verifyCar = (req:Request, res:Response, next: NextFunction): any => {
    console.log('This is the verifyCar middleware');
    if (req.body.make && req.body.model && req.body.year) {
        next();
        return;
    } else {
        res.status(400).json({message: "Please provide all required fields"});
        return;
    }
}

export default verifyCar;