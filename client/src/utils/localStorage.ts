import { StreakData } from '../types/streakTypes';

export const loadFromLocalStorage = (key: string): StreakData[] | undefined => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as StreakData[];
    } catch (err) {
        console.warn(`Error getting data from local storage for key: "${key}"`, err);
        return undefined;
    }
};

export const saveToLocalStorage = (key: string, value: StreakData[]): void => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (err) {
        console.error(`Error saving data to local storage for key: "${key}"`, err);
    }
};
