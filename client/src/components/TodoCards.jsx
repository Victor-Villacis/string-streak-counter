import { Typography, Button, Grid, Card, CardMedia, CardContent, CardActions, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getTodayTodos } from '../utils';
import React from 'react';

const TodoCards = ({ todos, handleEditClick, handleHideClick, handleCompleteClick, updateTodoMutation, deleteTodoMutation }) => {

    // Get current route
    const location = useLocation();
    // Checking if the current route is /today
    const isTodayRoute = location.pathname === "/today";

    // Get todos to display using the helper function
    const todosToday = getTodayTodos(todos);
    // Selects which todos to display based on the current route
    const todosToDisplay = isTodayRoute ? todosToday : todos;

    if (!Array.isArray(todosToDisplay)) {
        return (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
                No todos to display.
            </Typography>
        );
    }

    return (
        <>
            {todosToDisplay.map((todo, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            opacity: todo.hidden ? 0.5 : 1,
                            backgroundColor: todo.completed ? '#c8e6c9' : 'inherit',
                        }}
                    >
                        <CardMedia
                            component="div"
                            sx={{
                                pt: '50%',
                            }}
                            image={`https://source.unsplash.com/random?wallpapers&sig=${index}`}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h5">
                                {todo.title}
                            </Typography>
                            <Typography>
                                {todo.content}
                            </Typography>
                            <Divider />
                            {!todo.completed ? (
                                <Typography sx={{ marginTop: '2rem' }}>
                                    {isTodayRoute ? (
                                        <Button variant="outlined" size="small" color="warning" sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
                                            THIS IS DUE TODAY {todo.dueDate}
                                        </Button>
                                    ) : (
                                        <Button variant="outlined" size="small" color="success" sx={{ textAlign: 'center' }}>
                                            THIS IS DUE ON {todo.dueDate}
                                        </Button>
                                    )}
                                </Typography>
                            ) : (
                                <Typography sx={{ marginTop: '2rem' }}>
                                    <Button variant="outlined" size="small" color="success" sx={{ textAlign: 'center' }}>
                                        THIS IS COMPLETED
                                    </Button>
                                </Typography>
                            )}
                        </CardContent>

                        <CardActions>
                            <Button size="small" onClick={() => handleEditClick(todo)}>
                                Edit
                            </Button>
                            <Button size="small" onClick={() => handleHideClick(todo)}>
                                {updateTodoMutation.isLoading ? 'Hiding...' : 'Hide'}
                            </Button>
                            <Button size="small" onClick={() => deleteTodoMutation.mutate(todo.id)}>
                                {deleteTodoMutation.isLoading ? 'Deleting...' : '❌'}
                            </Button>
                            <Button size="small" onClick={() => handleCompleteClick(todo)}>
                                ✅
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    );
}

export default TodoCards;
