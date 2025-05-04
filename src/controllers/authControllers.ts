import { Request, Response, NextFunction } from 'express';
import { returnResponse } from '../middleware/response';
import { createUser } from './userController';
import { fetchUserByEmail } from '../services/userService';
import { compare } from '../utils/hashPassword';
export const login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body
    try {
        const user = await fetchUserByEmail(email)
        if (!user) return returnResponse(res, 400, 'Email or password wrong', 1);

        const equalPassword: boolean = await compare(password, user.password)
        if (!equalPassword) return returnResponse(res, 400, 'Email or password wrong', 1);

        const userData = (({ password, ...o }) => o)(user) 
        return returnResponse(res, 200, 'Login success', 0, userData);
    } catch (error) {
        console.log(error)
        return returnResponse(res, 500, 'Server error', -1);
    }
};

export const register = async (req: Request, res: Response): Promise<any> => {
    return createUser(req, res)
};
