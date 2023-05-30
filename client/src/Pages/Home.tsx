import { Link } from 'react-router-dom';
import {
    Outlet,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, CssBaseline, Box, InputBase, Button, } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e65100',
        },
        secondary: {
            main: '#6a1b9a',
        },
        background: {
            default: '#eceff1',
            paper: '#fff9c4',
        },
        text: {
            primary: '#1b5e20',
        },


    },

});

const flexWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    padding: '0.5rem',
};

const marginalSpacing = {
    margin: '10px'
};

const Home = () => {

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Box sx={flexWrapper}>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Button component={Link} to="/" variant="outlined" color="inherit">Tohome</Button>
                            <Button component={Link} to="/all" variant="outlined" color="inherit">Todos</Button>
                            <Button component={Link} to="/today" variant="outlined" color="inherit">Todays</Button>
                        </Box>
                        <Typography variant="h5" sx={marginalSpacing} >
                            <i>Extreme</i> 🚀 To-Do
                        </Typography>
                        <InputBase
                            sx={{
                                color: 'black',
                                backgroundColor: theme.palette.background.paper,
                                padding: '0.5rem',
                                borderRadius: '5px',
                            }}
                            placeholder="Search…"

                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex' }}>
                {/* Home is considered the root, its view is persistant across all routes/pages */}
                {/* {All other routes/pages will be dislayed in the <Outlet /> */}
                <Outlet />
            </Box>
        </ThemeProvider >
    );
};
export default Home;
