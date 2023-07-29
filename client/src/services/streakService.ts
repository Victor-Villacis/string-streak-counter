import axios, { AxiosResponse } from 'axios';
import { StreakData } from '../types/streakTypes';

const calculateStreak = async (text: string): Promise<StreakData> => {
    const response: AxiosResponse<StreakData> = await axios.post('http://localhost:3000/calculate-streak', { text });
    return response.data;
};

export default calculateStreak;
