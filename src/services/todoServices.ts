// @ts-ignore
import db from '../models/index.js'
const fetchAllTodos = async () => {
    return await db.Todo.findAll()
}
const fetchUserTodos = async (userId: number) => {
    return await db.Todo.findAll({
        where: {
            userId,
        },
    });
}
const createUserTodos = async (description: string, userId: number) => {
    return await db.Todo.create({
        description,
        isChecked: false,
        userId,
    });
}
const checkUserTodos = async (todoId: number, isChecked: boolean, userId: number) => {
    return await db.Todo.update(
        { isChecked },
        {
            returning: true,
            where: {
                id: todoId,
                userId
            }
        }
    );
}
const removeUserTodos = async (todoId: number, userId: number) => {
    return await db.Todo.destroy(
        {
            returning: true,
            where: {
                id: todoId,
                userId
            }
        }
    );
}

export { fetchAllTodos, fetchUserTodos, checkUserTodos, createUserTodos, removeUserTodos }