import { TextField, Button, Box, Paper } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import TodoService from '../services/TodoService';

const Form = () => {
    // State variables 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [dueDate, setDueDate] = useState("");

    const queryClient = useQueryClient();

    // Mutation for creating a new todo
    const createTodoMutation = useMutation(TodoService.createTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']); // Refresh todos after mutation
        }
    });

    // Event handler for adding a new todo
    const handleAddTodo = (event) => {
        event.preventDefault();

        // Create a new todo object
        const newTodo = { title, content, dueDate, completed: false };

        // Use the mutation to add the new todo
        createTodoMutation.mutate(newTodo);

        // Clear the form inputs
        setTitle("");
        setContent("");
        setDueDate("");
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 2 }}>
            <Paper elevation={3} sx={{ margin: 2, padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <form onSubmit={handleAddTodo}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="content"
                        label="Content"
                        name="content"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Due Date"
                        type="date"
                        value={dueDate}
                        onChange={(event) => setDueDate(event.target.value)}
                        autoFocus
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {createTodoMutation.isLoading ? 'Adding...' : 'Add'}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

export default Form;
