"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const todoRouter = (0, express_1.Router)();
todoRouter.get('/', todoController_1.getUserTodos);
todoRouter.post('/', todoController_1.createTodo);
todoRouter.put('/', todoController_1.updateUserTodos);
todoRouter.delete('/', todoController_1.deleteUserTodos);
exports.default = todoRouter;
//# sourceMappingURL=todosAPI.js.map