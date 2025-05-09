"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserTodos = exports.updateUserTodos = exports.getUserTodos = exports.getAllTodos = exports.createTodo = void 0;
const todoServices_1 = require("../services/todoServices");
const response_1 = require("../middleware/response");
const getAllTodos = async (req, res) => {
    try {
        const data = await (0, todoServices_1.fetchAllTodos)();
        res.status(201).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(400);
    }
};
exports.getAllTodos = getAllTodos;
const createTodo = async (req, res) => {
    try {
        const { description, userId } = req.body;
        if (!(description && userId)) {
            return (0, response_1.returnResponse)(res, 400, 'No user id or description', -1);
        }
        const data = await (0, todoServices_1.createUserTodos)(description, +userId);
        return (0, response_1.returnResponse)(res, 200, 'Create todo successfully', 0, data);
    }
    catch (error) {
        console.log(error);
        return (0, response_1.returnResponse)(res, 500, 'Server error', -1);
    }
};
exports.createTodo = createTodo;
const getUserTodos = async (req, res) => {
    try {
        const { userid } = req.headers;
        console.log(req.headers);
        if (!userid) {
            return (0, response_1.returnResponse)(res, 400, 'No user id or description', -1);
        }
        const data = await (0, todoServices_1.fetchUserTodos)(+(userid ? +userid : 1));
        return (0, response_1.returnResponse)(res, 200, 'get todo successfully', 0, data);
    }
    catch (error) {
        return (0, response_1.returnResponse)(res, 500, 'Server error', -1);
    }
};
exports.getUserTodos = getUserTodos;
const updateUserTodos = async (req, res) => {
    try {
        const { todoId, isChecked, userId } = req.body;
        if (!todoId && !userId) {
            return (0, response_1.returnResponse)(res, 400, 'No user id or description', -1);
        }
        const data = await (0, todoServices_1.checkUserTodos)(+todoId, isChecked, +userId);
        console.log("remove user ?", data);
        return (0, response_1.returnResponse)(res, 200, 'update todo successfully', 0);
    }
    catch (error) {
        return (0, response_1.returnResponse)(res, 500, 'Error to update todo', -1);
    }
};
exports.updateUserTodos = updateUserTodos;
const deleteUserTodos = async (req, res) => {
    try {
        const { todoId, userId } = req.body;
        if (!todoId && !userId) {
            return (0, response_1.returnResponse)(res, 400, 'No user id or description', -1);
        }
        const data = await (0, todoServices_1.removeUserTodos)(+todoId, +userId);
        console.log("remove user ?", data);
        return (0, response_1.returnResponse)(res, 200, 'Delete todo successfully', 0);
    }
    catch (error) {
        return (0, response_1.returnResponse)(res, 500, error.message, -1);
    }
};
exports.deleteUserTodos = deleteUserTodos;
//# sourceMappingURL=todoController.js.map