"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserTodos = exports.createUserTodos = exports.checkUserTodos = exports.fetchUserTodos = exports.fetchAllTodos = void 0;
const db = require('../models/');
const fetchAllTodos = async () => {
    return await db.Todo.findAll();
};
exports.fetchAllTodos = fetchAllTodos;
const fetchUserTodos = async (userId) => {
    return await db.Todo.findAll({
        where: {
            userId,
        },
    });
};
exports.fetchUserTodos = fetchUserTodos;
const createUserTodos = async (description, userId) => {
    return await db.Todo.create({
        description,
        isChecked: false,
        userId,
    });
};
exports.createUserTodos = createUserTodos;
const checkUserTodos = async (todoId, isChecked, userId) => {
    const [updatedCount, updatedRows] = await db.Todo.update({ isChecked: !isChecked }, {
        returning: true,
        where: {
            id: todoId,
            userId,
        },
    });
    if (updatedRows === 0) {
        throw new Error('Todo not found or unauthorized');
    }
    return updatedRows[0];
};
exports.checkUserTodos = checkUserTodos;
const removeUserTodos = async (todoId, userId) => {
    const res = await db.Todo.destroy({
        returning: true,
        where: {
            id: todoId,
            userId
        }
    });
    if (res === 0) {
        throw new Error("Bug remove todo");
    }
    return res;
};
exports.removeUserTodos = removeUserTodos;
//# sourceMappingURL=todoServices.js.map