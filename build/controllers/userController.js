"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByName = exports.getAllUsers = exports.fetchAllUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
Object.defineProperty(exports, "fetchAllUsers", { enumerable: true, get: function () { return userService_1.fetchAllUsers; } });
const response_1 = require("../middleware/response");
const hashPassword_1 = require("../utils/hashPassword");
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userByName = await (0, userService_1.fetchUserByName)(name);
        const userByEmail = await (0, userService_1.fetchUserByEmail)(email);
        if (userByName)
            return (0, response_1.returnResponse)(res, 400, 'user name exist', 1);
        if (userByEmail)
            return (0, response_1.returnResponse)(res, 400, 'email exist', 1);
        const hash = await (0, hashPassword_1.hashPassword)(password);
        await (0, userService_1.createUserService)(name, email, hash);
        return (0, response_1.returnResponse)(res, 200, 'Create success', 0);
    }
    catch (err) {
        console.error(err);
        return (0, response_1.returnResponse)(res, 500, 'Server error', -1);
    }
};
exports.createUser = createUser;
const getAllUsers = async (req, res, next) => {
    try {
        const data = await (0, userService_1.fetchAllUsers)();
        res.status(201).json(data);
    }
    catch (error) {
        res.status(400);
    }
};
exports.getAllUsers = getAllUsers;
const findUserByName = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (name) {
            return (0, response_1.returnResponse)(res, 400, 'Name cannot be empty', 1);
        }
        const data = await (0, userService_1.fetchUserByName)(name);
        return data;
    }
    catch (error) {
        return (0, response_1.returnResponse)(res, 500, 'Server error', -1);
    }
};
exports.findUserByName = findUserByName;
//# sourceMappingURL=userController.js.map