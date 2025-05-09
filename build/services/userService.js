"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.fetchUserByName = exports.fetchUserByEmail = exports.fetchAllUsers = void 0;
const db = require('../models/');
const fetchAllUsers = async () => {
    return await db.User.findAll();
};
exports.fetchAllUsers = fetchAllUsers;
const fetchUserByEmail = async (email) => {
    return await db.User.findOne({
        where: { email },
        raw: true
    });
};
exports.fetchUserByEmail = fetchUserByEmail;
const fetchUserByName = async (name) => {
    return await db.User.findOne({
        where: { name },
        raw: true
    });
};
exports.fetchUserByName = fetchUserByName;
const createUserService = async (name, email, password) => {
    return await db.User.create({
        name,
        email,
        password
    });
};
exports.createUserService = createUserService;
//# sourceMappingURL=userService.js.map