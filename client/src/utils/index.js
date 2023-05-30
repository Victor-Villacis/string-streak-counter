export const getTodayTodos = (todos) => {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    if (Array.isArray(todos)) {
        return todos.filter(todo => {
            if (typeof todo === 'object' && todo !== null) {
                const dueDate = new Date(todo.dueDate);
                return dueDate.toLocaleDateString() === new Date(formattedToday).toLocaleDateString();
            }
            return false;
        });
    }

    return [];
}
