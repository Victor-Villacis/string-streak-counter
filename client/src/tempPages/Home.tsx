import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';

import { useStreaks } from '../hooks/useStreaks';
import { theme } from '../utils/theme';


import InputField from '../components/InputField';
import CustomAppBar from '../components/CustomAppBar';
import StreakDisplay from '../components/StreakDisplay';
import SavedStreaks from '../components/SavedStreaks'

const Home: React.FC = () => {
    const {
        streak,
        count,
        streakType,
        inputText,
        savedStreaks,
        handleInputChange,
        handleClearInput,
        handleRemoveStreak,
        handleSave,
    } = useStreaks();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CustomAppBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', minHeight: '100vh', marginTop: 4 }}>
                <InputField handleInputChange={handleInputChange} handleClearInput={handleClearInput} inputText={inputText} handleSave={handleSave} />
                <StreakDisplay inputText={inputText} streak={streak} count={count} streakType={streakType} />
                <SavedStreaks streaks={savedStreaks} handleRemoveStreak={handleRemoveStreak} />
            </Box>
        </ThemeProvider>
    );
};

export default Home;
