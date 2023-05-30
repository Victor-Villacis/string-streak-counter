import { useRouteError } from "react-router-dom";

interface ErrorType {
    statusText?: string;
    message?: string;
}

const ErrorPage = () => {
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <div>
            <h1>WOW! I'm sorry</h1>
            <p>Something unexpected has happened.</p>
            <strong>We think this is wrong: {error?.statusText || error?.message}</strong>
        </div >
    );
}

export default ErrorPage;
