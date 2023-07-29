import React from 'react';
import { Typography, Box } from '@mui/material';
import { StreakData } from '../types/streakTypes';


const highlightStreakInInputText = (inputText: string, streak: string) => {
    const index = inputText.indexOf(streak);
    if (index === -1) {
        return inputText;
    }
    const beforeStreak = inputText.substring(0, index);
    const afterStreak = inputText.substring(index + streak.length);
    return (
        <>
            {beforeStreak}
            <mark>{streak}</mark>
            {afterStreak}
        </>
    );
};


const StreakDisplay: React.FC<StreakData> = ({ inputText, streak, count, streakType }) => {
    const streakDescription =
        streakType === 'even' ? 'sequence consists of an even number of characters' :
            streakType === 'odd' ? 'sequence consists of an odd number of characters' :
                '';
    return (
        <Box sx={{ marginTop: 2, textAlign: 'justify' }}>
            <Typography variant="h6" component="div">
                Longest sequence of "even" or "odd" letters of the same type (ASCII)
            </Typography>
            <Typography variant="h6" component="div">
                Input text: <strong>{highlightStreakInInputText(inputText, streak)}</strong>
            </Typography>
            <Typography variant="h6" component="div">
                Streak: <strong>{streak}</strong>
            </Typography>
            <Typography variant="h6" component="div">
                Length: <strong>{count} letters</strong>
            </Typography>
            <Typography variant="h6" component="div">
                Type: <strong>{streakDescription}</strong>
            </Typography>
        </Box>
    );
};

export default StreakDisplay;
