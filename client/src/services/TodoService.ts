import axios from 'axios';

export default class TodoService {
    static async getTodos() {
        try {
            const response = await axios.get(`/api/all-todos`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error retrieving TODO:', error);
            throw error;
        }
    };

    static async createTodo(todo: any) {
        try {
            const response = await axios.post(`/api/new-todo`, todo);
            return response.data;
        } catch (error) {
            console.error('Error creating TODO:', error);
            throw error;
        }
    };

    static async updateTodo(updatedTodo: any) {
        try {
            console.log(updatedTodo, 'in updateTodo');
            const response = await axios.put(`/api/update-todo/${updatedTodo.id}`, updatedTodo);
            return response.data;
        } catch (error) {
            console.error('Error updating TODO:', error);
            throw error;
        }
    };

    static async deleteTodo(id: string) {
        try {
            const response = await axios.delete(`/api/delete-todo/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting TODO:', error);
            throw error;
        }
    };
}
