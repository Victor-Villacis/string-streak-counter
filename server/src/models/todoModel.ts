import { db } from '../firebase-config';

export class TodoModel {
    static async getTodos() {
        // this was a roadblock, as I was creating an id property on the todo object in the client,
        // which was a property
        const snapshot = await db.collection('todos').get();
        return snapshot.docs.map(docRef => {
            const todo = docRef.data();
            todo.id = docRef.id;
            return todo;
        });
    }


    static async createTodo(todo: { title: string, description: string }) {
        const docRef = await db.collection('todos').add(todo);
        console.log(docRef.id, 'in createTodo');
        return docRef.id;
    }

    static async updateTodo(id: string, updatedTodo: { title: string, description: string }) {
        console.log(id, updatedTodo, 'in updateTodo');
        const docRef = db.collection('todos').doc(id);
        await docRef.update(updatedTodo);
        return docRef.get();
    }

    static async deleteTodo(id: string) {
        await db.collection('todos').doc(id).delete();
        return id;
    }
}




