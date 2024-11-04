import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import carRouter from './routes/carRouter';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', carRouter);

const middleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Hello! This is the middleware!');
    next();
};

const secondMiddleware = (req: Request, res: Response, next: NextFunction) => { 
    console.log('This is the second middleware');
    next();
}

app.get('/', middleware, secondMiddleware, (req: Request, res: Response) => {
    res.send('Welcome to my API');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));