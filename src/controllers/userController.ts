import { Request, Response, NextFunction } from 'express';
import { fetchAllUsers } from '../services/userService';

const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email } = req.body;

        if (!username || !email) {
             res.status(400).json({
                EM: 'Missing required fields',
                EC: -1,
            });
        }

        let result
        //   result = await createUserService({ username, email });

         res.status(201).json({
            EM: 'User created successfully',
            EC: 0,
            DT: result,
        });
    } catch (error: any) {
        console.error('Create user error:', error);

         res.status(error.status || 500).json({
            EM: error.message || 'Internal server error',
            EC: -1,
        });
    }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await fetchAllUsers()
        res.status(201).json(data);
    } catch (error) {
        res.status(400);
    }
};


export { createUser, fetchAllUsers, getAllUsers }