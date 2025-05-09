"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const hashPassword = async (password) => {
    try {
        return await bcrypt_1.default.hash(password, saltRounds);
    }
    catch (error) {
        console.log("hash error", error);
        throw new Error('hash error');
    }
};
exports.hashPassword = hashPassword;
const compare = async (password, hashedPassword) => {
    return await bcrypt_1.default.compare(password, hashedPassword);
};
exports.compare = compare;
//# sourceMappingURL=hashPassword.js.map