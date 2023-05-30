import { Router } from 'express';
import TodoController from '../controllers/todoController';


const router = Router();

router.get('/all-todos', TodoController.getTodos);
router.post('/new-todo', TodoController.createTodo);
router.put('/update-todo/:id', TodoController.updateTodo);
router.delete('/delete-todo/:id', TodoController.deleteTodo);

export default router;
