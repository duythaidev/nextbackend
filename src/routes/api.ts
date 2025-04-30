import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';
import { createTodo, deleteUserTodos, getUserTodos, updateUserTodos } from '../controllers/todoController';
import { removeUserTodos } from '../services/todoServices';

const router = Router();

router.use(function (req, res, next) {
    setTimeout(next, 10)
});
router.get('/', (req, res, next) => {
    res.send('hi uwu')
});
router.get('/users', getAllUsers);
router.post('/users', createUser);

router.get('/todos', getUserTodos);
router.post('/todos', createTodo);
router.put('/todos', updateUserTodos);
router.delete('/todos', deleteUserTodos);

export default router;