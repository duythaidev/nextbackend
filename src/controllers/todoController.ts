import { Request, Response, NextFunction } from 'express';
import { checkUserTodos, createUserTodos, fetchAllTodos, fetchUserTodos, removeUserTodos } from '../services/todoServices';

const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await fetchAllTodos()
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400);
    }
};


const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await createUserTodos(req.body.description, +req.body.userId)
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            EM: 'Error to create new todo',
            EC: -1,
        });
    }
};

const getUserTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await fetchUserTodos(+req.body.userId)
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            EM: 'Error to get todo',
            EC: -1,
        });;
    }
};
const updateUserTodos = async (req: Request, res: Response, next: NextFunction) => {
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
const deleteUserTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await removeUserTodos(+req.body.todoId, +req.body.userId)
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({
            EM: 'Error to delete todo',
            EC: -1,
        });
    }
};

// const updateUserTodos
export { createTodo, getAllTodos, getUserTodos, updateUserTodos, deleteUserTodos }
