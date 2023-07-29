import React from 'react';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { InputFieldProps } from '../types/streakTypes';


const InputField: React.FC<InputFieldProps> = ({ handleInputChange, handleClearInput, handleSave, inputText }) => {
    return (
        <>
            <TextField
                id="input-text"
                label="Enter Text"
                variant="outlined"
                onChange={handleInputChange}
                value={inputText}
                sx={{ maxWidth: '600px', width: '100%' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleClearInput}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <br />
            <Button variant="contained" color="primary" onClick={handleSave}>
                Save
            </Button>
        </>

    );
};


export default InputField;
