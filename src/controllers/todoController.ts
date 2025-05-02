import { Request, Response, NextFunction } from 'express';
import { checkUserTodos, createUserTodos, fetchAllTodos, fetchUserTodos, removeUserTodos } from '../services/todoServices';
import { returnResponse } from '../middleware/response';

const getAllTodos = async (req: Request, res: Response): Promise<any> => {
    try {
        const data = await fetchAllTodos()
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
};


const createTodo = async (req: Request, res: Response): Promise<any> => {
    try {
        const { description, userId } = req.body
        if (!(description && userId)) {
            return returnResponse(res, 400, 'No user id or description', -1)
        }
        const data = await createUserTodos(description, +userId)
        return returnResponse(res, 200, 'Create todo successfully', 0, data);
    } catch (error) {
        console.log(error)
        return returnResponse(res, 500, 'Server error', -1)
    }
};



const getUserTodos = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userid } = req.headers
        if (!userid) {
            return returnResponse(res, 400, 'No user id or description', -1)
        }
        const data = await fetchUserTodos(+(userid ? +userid : 1))
        return returnResponse(res, 200, 'get todo successfully', 0, data);
    } catch (error) {
        return returnResponse(res, 500, 'Server error', -1)
    }
};

const updateUserTodos = async (req: Request, res: Response): Promise<any> => {
    try {
        const data = await checkUserTodos(+req.body.todoId, req.body.isChecked, +req.body.userId)
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            EM: 'Error to update todo',
            EC: -1,
        });;
    }
};

const deleteUserTodos = async (req: Request, res: Response): Promise<any> => {
    try {
        const { todoId, userId } = req.body
        if (!todoId && userId) {
            return returnResponse(res, 400, 'No user id or description', -1)
        }
        const data = await removeUserTodos(+todoId, +userId)
        return returnResponse(res, 200, 'Delete todo successfully', 0);
    } catch (error:any) {
        return returnResponse(res, 500, error.message, -1)
    }
};
export { createTodo, getAllTodos, getUserTodos, updateUserTodos, deleteUserTodos }