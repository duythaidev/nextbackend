import { Router } from "express";
import { createTodo, deleteUserTodos, getUserTodos, updateUserTodos } from "../controllers/todoController";

const todoRouter = Router();
todoRouter.get('/', getUserTodos);
todoRouter.post('/', createTodo);
todoRouter.put('/', updateUserTodos);
todoRouter.delete('/', deleteUserTodos);
export default todoRouter
