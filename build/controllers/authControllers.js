"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const response_1 = require("../middleware/response");
const userController_1 = require("./userController");
const userService_1 = require("../services/userService");
const hashPassword_1 = require("../utils/hashPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await (0, userService_1.fetchUserByEmail)(email);
        if (!user)
            return (0, response_1.returnResponse)(res, 400, 'Email or password wrong', 1);
        const equalPassword = await (0, hashPassword_1.compare)(password, user.password);
        if (!equalPassword)
            return (0, response_1.returnResponse)(res, 400, 'Email or password wrong', 1);
        const userData = (({ password, createdAt, updatedAt, ...o }) => o)(user);
        const secretKey = process.env.JWT_KEY || 'aduvjp';
        let payload = {
            ...userData,
        };
        const token = jsonwebtoken_1.default.sign(payload, secretKey, { algorithm: 'RS256', expiresIn: '1h' });
        res.cookie('access-token', token);
        return (0, response_1.returnResponse)(res, 200, 'Login success', 0, userData);
    }
    catch (error) {
        console.log(error);
        return (0, response_1.returnResponse)(res, 500, 'Server error', -1);
    }
};
exports.login = login;
const register = async (req, res) => {
    return (0, userController_1.createUser)(req, res);
};
exports.register = register;
//# sourceMappingURL=authControllers.js.map