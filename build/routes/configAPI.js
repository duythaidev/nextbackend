"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userAPI_1 = __importDefault(require("./userAPI"));
const todosAPI_1 = __importDefault(require("./todosAPI"));
const authAPI_1 = __importDefault(require("./authAPI"));
const ms = 10;
const delay = (req, res, next) => {
    setTimeout(next, ms);
};
const configRoutes = (app) => {
    app.use(delay); // <-- đặt trước các use còn lại
    app.use('/api/auth', authAPI_1.default);
    app.use('/api/users', userAPI_1.default);
    app.use('/api/todos', todosAPI_1.default);
};
exports.default = configRoutes;
//# sourceMappingURL=configAPI.js.map