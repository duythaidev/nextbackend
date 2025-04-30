import { Request, Response, NextFunction } from 'express';
import { fetchAllUsers } from '../services/userService';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(201).json({ hi: 'hi' });
    } catch (error) {
        // next(error)
        res.status(400);
    }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await fetchAllUsers()
        res.status(201).json(data);
    } catch (error) {
        res.status(400);
    }
};
export const getAllUser = (req: Request, res: Response, next: NextFunction) => {

};