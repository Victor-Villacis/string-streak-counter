import { useQuery, useMutation } from '@tanstack/react-query';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import TodoService from '../services/TodoService';
import { getTodayTodos } from '../utils';


const SubBar = () => {
    // Fetch todos from the server, this is needed to show the count of todos based on the current route
    const { data: todos = [], isLoading, isError, error } = useQuery(['todos'], TodoService.getTodos);

    // Get current route
    const location = useLocation();
    const isTodayRoute = location.pathname === "/today";

    // Get todos for today using the helper function
    const todosToday = getTodayTodos(todos);
    const todosCount = isTodayRoute ? todosToday.length : todos.length;

    // Error handling
    if (isError) {
        if (error instanceof Error) {
            return <p>Error: {error.message}</p>;
        } else {
            return <p>Error: {error.toString()}</p>;
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {isLoading ? 'Loading...' : 'Todos'} ({todosCount})
                    <span style={{ float: 'right' }}>{new Date().toLocaleDateString()}</span>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default SubBar;
