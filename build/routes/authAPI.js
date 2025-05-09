"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', authControllers_1.register);
authRouter.post('/login', authControllers_1.login);
exports.default = authRouter;
//# sourceMappingURL=authAPI.js.map