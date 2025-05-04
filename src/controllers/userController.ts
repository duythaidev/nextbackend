import { Request, Response, NextFunction, response } from 'express';
import { createUserService, fetchAllUsers, fetchUserByEmail, fetchUserByName } from '../services/userService';
import bcrypt from 'bcrypt';
import { returnResponse } from '../middleware/response';
import { hashPassword } from '../utils/hashPassword';

const createUser = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;
    try {
        const userByName = await fetchUserByName(name)
        const userByEmail = await fetchUserByEmail(email)

        if (userByName) return returnResponse(res, 400, 'user name exist', 1);
        if (userByEmail) return returnResponse(res, 400, 'email exist', 1);

        const hash = await hashPassword(password);
        await createUserService(name, email, hash);

        return returnResponse(res, 200, 'Create success', 0);
    } catch (err) {
        console.error(err);
        return returnResponse(res, 500, 'Server error', -1);
    }
};


const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const data = await fetchAllUsers()
        res.status(201).json(data);
    } catch (error) {
        res.status(400);
    }
};
const findUserByName = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { name } = req.body
        if (name) {
            return returnResponse(res, 400, 'Name cannot be empty', 1)
        }
        const data = await fetchUserByName(name)
        return data
    } catch (error) {
        return returnResponse(res, 500, 'Server error', -1)
    }
};


export { createUser, fetchAllUsers, getAllUsers, findUserByName }