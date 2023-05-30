import { Request, Response } from 'express';
import { TodoModel } from '../models/todoModel';

export default class TodoController {

    static async getTodos(req: Request, res: Response) {
        const todos = await TodoModel.getTodos();
        res.status(200).send(todos);
    }

    static async createTodo(req: Request, res: Response) {
        const todo = req.body;
        const id = await TodoModel.createTodo(todo);
        res.status(201).send(`Created a new todo: ${id}`);
    }

    static async updateTodo(req: Request, res: Response) {
        console.log(req.body, 'in updateTodo');
        console.log(req.params, 'in updateTodo');
        const { id } = req.params;
        const updatedTodo = req.body;
        await TodoModel.updateTodo(id, updatedTodo);
        res.status(200).send(`Updated todo: ${id}`);
    }

    static async deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        await TodoModel.deleteTodo(id);
        res.status(200).send(`Deleted todo: ${id}`);
    }
}
