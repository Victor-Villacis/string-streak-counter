// TodoService.ts
import axios from 'axios';


export default class TodoService {
    static async getTodos() {
        const response = await axios.get(`/api/all-todos`);
        console.log(response.data);
        return response.data;
    };

    static async createTodo(todo: any) {
        const response = await axios.post(`/api/new-todo`, todo);
        return response.data;
    };

    static async updateTodo(updatedTodo: any) {
        console.log(updatedTodo, 'in updateTodo');
        const response = await axios.put(`/api/update-todo/${updatedTodo.id}`, updatedTodo);
        return response.data;
    };

    static async deleteTodo(id: string) {
        const response = await axios.delete(`/api/delete-todo/${id}`);
        return response.data;
    };
}
