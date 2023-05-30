import { TextField, Button, Paper, Grid, Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import TodoService from '../services/TodoService';
import TodoCards from '../components/TodoCards';

const CardGrid = () => {
    const queryClient = useQueryClient();

    // Fetch all todos from teh server, I am using React Query in place of useEffect
    const { data: todos = [], isLoading, isError, error } = useQuery(['todos'], TodoService.getTodos);


    // State variables
    const [editingTodo, setEditingTodo] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    // Mutations section
    // I am using React Query mutation functions
    // They allow me to to execute my crud operations from my TodoService

    // Update a todo
    const updateTodoMutation = useMutation(TodoService.updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']); // Refresh todos after mutation
        }
    });

    // Delete a todo
    const deleteTodoMutation = useMutation(TodoService.deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']); // Refresh todos after mutation
        }
    });

    // Handlers section

    // Open dialog for editing todo
    const handleEditClick = (todo) => {
        setEditingTodo(todo);
        setDialogOpen(true);
    };

    // Close dialog
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    // Save changes to todo
    const handleSaveTodo = () => {
        if (editingTodo) {
            updateTodoMutation.mutate(editingTodo);
        }
        setDialogOpen(false);
    };

    // Toggle hide on the todo
    const handleHideClick = (todo) => {
        const hiddenTodo = { ...todo, hidden: !todo.hidden };
        updateTodoMutation.mutate(hiddenTodo);
    };

    const handleCompleteClick = (todo) => {
        const completedTodo = { ...todo, completed: !todo.completed };
        updateTodoMutation.mutate(completedTodo);
    };
    // Error handling
    if (isError) {
        if (error instanceof Error) {
            return <p>Error: {error.message}</p>;
        } else {
            return <p>Error: {error.toString()}</p>;
        }
    }

    return (
        <Paper elevation={3} sx={{ margin: 2, padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <Grid container spacing={4}>
                <TodoCards todos={todos} handleEditClick={handleEditClick} handleHideClick={handleHideClick} handleCompleteClick={handleCompleteClick} updateTodoMutation={updateTodoMutation} deleteTodoMutation={deleteTodoMutation} />
            </Grid>
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        value={editingTodo ? editingTodo.title : ''}
                        onChange={(event) => setEditingTodo({ ...editingTodo, title: event.target.value })}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Content"
                        type="text"
                        fullWidth
                        value={editingTodo ? editingTodo.content : ''}
                        onChange={(event) => setEditingTodo({ ...editingTodo, content: event.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dueDate"
                        label="Due Date"
                        name="dueDate"
                        type="date"
                        value={editingTodo ? editingTodo.dueDate : ''}
                        onChange={(event) => setEditingTodo({ ...editingTodo, dueDate: event.target.value })}
                        autoFocus
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveTodo}>
                        {updateTodoMutation.isLoading ? 'Saving...' : '✅'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}

export default CardGrid;
