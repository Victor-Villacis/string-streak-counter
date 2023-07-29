export interface StreakData {
    streak: string;
    count: number;
    streakType: string;
    inputText: string;
}

export interface InputFieldProps {
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClearInput: () => void;
    handleSave: () => void;
    inputText: string;

}

export interface SavedStreakProps {
    streaks: StreakData[];
    handleRemoveStreak: (index: number) => void;
}

