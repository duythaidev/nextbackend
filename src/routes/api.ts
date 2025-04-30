import { Router } from 'express';
import {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem,
} from '../controllers/itemController';
import { getAllUsers } from '../controllers/userController';

const router = Router();

router.use(function (req, res, next) {
    setTimeout(next, 1000)
});
router.get('/', getItems);
router.get('/users', getAllUsers);

router.get('/:id', getItemById);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;