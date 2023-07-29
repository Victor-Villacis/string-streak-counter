import React from 'react';
import { useLocation } from 'react-router-dom';

interface ErrorType {
    statusText?: string;
    message?: string;
}

const ErrorPage: React.FC = () => {
    const location = useLocation();
    const error = location.state as ErrorType | undefined;

    return (
        <div>
            <h1>Oops, something went wrong!</h1>
            <p>{error?.statusText}</p>
            <p>{error?.message || 'An unknown error occurred.'}</p>
        </div>
    );
}

export default ErrorPage;
