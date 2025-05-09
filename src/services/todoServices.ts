
const db = require('../models/');

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
    const [updatedCount, updatedRows] = await db.Todo.update(
        { isChecked: !isChecked },
        {
            returning: true,
            where: {
                id: todoId,
                userId,
            },
        }
    );

    if (updatedRows === 0) {
        throw new Error('Todo not found or unauthorized');
    }

    return updatedRows[0];
};

const removeUserTodos = async (todoId: number, userId: number) => {
    const res = await db.Todo.destroy(
        {
            returning: true,
            where: {
                id: todoId,
                userId
            }
        }
    );
    if (res === 0) {
        throw new Error("Bug remove todo");
    }
    return res
}

export { fetchAllTodos, fetchUserTodos, checkUserTodos, createUserTodos, removeUserTodos }