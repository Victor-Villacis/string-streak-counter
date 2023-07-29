import React from 'react';
import { Card, Typography, CardContent, IconButton, Grid } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { SavedStreakProps } from '../types/streakTypes';

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

const SavedStreaks: React.FC<SavedStreakProps> = ({ streaks, handleRemoveStreak }) => {
    return (
        <Grid container spacing={2} direction="row" wrap="wrap" justifyContent="center">
            {streaks.map((streak, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                    <Card sx={{ width: '100%', minHeight: 120, position: 'relative' }}>
                        <IconButton aria-label="remove" onClick={() => handleRemoveStreak(index)} sx={{ position: 'absolute', top: 0, right: 0 }}>
                            <CloseIcon />
                        </IconButton>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Input Text: <strong>{highlightStreakInInputText(streak.inputText, streak.streak)}</strong>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ wordWrap: 'break-word' }}>
                                Streak: <strong>{streak.streak}</strong>
                            </Typography>
                            <Typography variant="h6" component="div">
                                Length: <strong>{streak.count} letters</strong>
                            </Typography>
                            <Typography variant="h6" component="div">
                                Type: <strong>{streak.streakType}</strong>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default SavedStreaks;

