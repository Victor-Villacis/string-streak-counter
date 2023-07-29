import { Request, Response } from 'express';

const calculateStreak = (req: Request, res: Response) => {
    const text = req.body.text;
    let maxStreak = '';
    let maxStreakCount = 0;
    let maxStreakType = '';
    let currentStreak = '';
    let currentStreakCount = 0;
    let currentStreakType = '';

    const isEven = (letter: string) => {
        const code = letter.toLowerCase().charCodeAt(0);
        return (code - 97) % 2 === 0;
    };

    for (let letter of text) {
        if (letter === ' ' && currentStreakCount > 0) {
            // Ignore whitespace but don't break the streak
            currentStreak += letter;
            continue;
        } else if (!/[a-zA-Z]/.test(letter)) {
            // Reset current streak if the character is not a letter
            currentStreak = '';
            currentStreakCount = 0;
            currentStreakType = '';
            continue;
        }

        if (currentStreakCount === 0) {
            // Start a new streak if there's no current streak
            currentStreak = letter;
            currentStreakCount = 1;
            currentStreakType = isEven(letter) ? 'even' : 'odd';
        } else if ((isEven(letter) && currentStreakType === 'even') || (!isEven(letter) && currentStreakType === 'odd')) {
            // Continue the current streak if the letter is of the same type
            currentStreak += letter;
            currentStreakCount += 1;
        } else {
            // Start a new streak if the letter is of a different type
            currentStreak = letter;
            currentStreakCount = 1;
            currentStreakType = isEven(letter) ? 'even' : 'odd';
        }

        if (currentStreakCount > maxStreakCount) {
            // Update max streak if the current streak is longer
            maxStreak = currentStreak;
            maxStreakCount = currentStreakCount;
            maxStreakType = currentStreakType;
        }
    }

    res.json({
        streak: maxStreak,
        count: maxStreakCount,
        streakType: maxStreakType,
    });

};

export { calculateStreak };
