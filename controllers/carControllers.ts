import cars from '../data/carData';
import {Request, Response} from 'express';

export const carController = {
    getCars: (req: Request, res: Response): any => {
        return res.json(cars);
    },

    getCarById: (req: Request, res: Response) => {
        try {
            const carId = parseInt(req.params.id);
            const carById = cars.find(car => car.id === carId);
            if (!carById) {
                res.json({message: "No car found"});
            }
            res.json(carById);
        } catch (error) {
            res.json(error);
        }
    },

    createNewCar: (req: Request, res: Response) => {
        const {brand, year, model} = req.body;
        const newCar = {
            id: cars.length + 1,
            brand,
            year,
            model,
        }
        cars.push(newCar);
        res.json(cars);
        console.log(newCar);
    },

    updateCar: (req: Request, res: Response): any => {
        try {
            const carId = parseInt(req.params.id);
            const carById = cars.find(car => car.id === carId);
            if (!carById) {
                return res.json({message: "No car found"});
                
            }
            const {brand, year, model} = req.body;
            if (!brand || !year || !model) {
                return res.json({message: "Please provide all required fields"});
            }
            carById.brand = brand;
            carById.year = year;
            carById.model = model;
            res.json(cars);
        } catch (error) {
            res.status(500).json({message: "Internal server error"});
        }
    },

    deleteCar: (req: Request, res: Response): any => {
        try {
            const carId = parseInt(req.params.id);
            const carById = cars.find(car => car.id === carId);
            if (!carById) {
                return res.json({message: "No car found"});
            }
            const index = cars.indexOf(carById);
            cars.splice(index, 1);
            res.json({cars, message: "Car deleted successfully"});
        } catch (error) {
            res.status(500).json({message: "Internal server error"});
        }
    }
}