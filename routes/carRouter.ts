import { Router } from 'express';
import cars from '../data/carData';
import {Request, Response} from 'express';
const carRouter = Router();
import {carController} from '../controllers/carControllers';
import verifyCar from '../middleware/verifyCar';

carRouter.get('/cars', carController.getCars);
carRouter.get('/car/:id', carController.getCarById);
carRouter.post('/cars', verifyCar, carController.createNewCar);
carRouter.put('/car/:id', carController.updateCar);
carRouter.delete('/car/:id', carController.deleteCar);

export default carRouter;