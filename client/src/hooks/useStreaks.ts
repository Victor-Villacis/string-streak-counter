import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query'

import calculateStreak from '../services/streakService';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

import { StreakData } from '../types/streakTypes';


export const useStreaks = () => {
    const [streak, setStreak] = useState('');
    const [count, setCount] = useState(0);
    const [streakType, setStreakType] = useState('');
    const [inputText, setInputText] = useState('');
    const [savedStreaks, setSavedStreaks] = useState<StreakData[]>([]);

    useEffect(() => {
        const savedStreaks = loadFromLocalStorage('savedStreaks');
        if (savedStreaks) {
            setSavedStreaks(savedStreaks);
        }
    }, []);

    const mutation = useMutation(calculateStreak, {
        onSuccess: data => {
            setStreak(data.streak);
            setCount(data.count);
            setStreakType(data.streakType);
        },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setInputText(text);
        mutation.mutate(text);
    };

    const handleClearInput = () => {
        setInputText('');
        setStreak('');
        setCount(0);
        setStreakType('');
    };

    const handleRemoveStreak = (index: number) => {
        const newSavedStreaks = [...savedStreaks];
        newSavedStreaks.splice(index, 1);
        setSavedStreaks(newSavedStreaks);
        saveToLocalStorage('savedStreaks', newSavedStreaks);
    };

    const handleSave = () => {
        setInputText('');
        const newSavedStreaks = [...savedStreaks, { streak, count, streakType, inputText }];
        setSavedStreaks(newSavedStreaks);
        saveToLocalStorage('savedStreaks', newSavedStreaks);
    };

    return {
        streak,
        count,
        streakType,
        inputText,
        savedStreaks,
        handleSave,
        handleInputChange,
        handleClearInput,
        handleRemoveStreak,
    };
};
