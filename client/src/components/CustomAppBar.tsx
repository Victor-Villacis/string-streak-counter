import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CustomAppBar: React.FC = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Streak Calculator
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default CustomAppBar;
