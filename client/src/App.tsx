// App.tsx
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Index from "./Pages/Index";
import Todos from "./pages/Todos";
import Todays from "./pages/Todays";
const queryClient = new QueryClient();


// My routes are defined here using react-router-dom
const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "all",
                element: <Todos />,
            },
            {
                path: "today",
                element: <Todays />,
            },

        ],
    },
];

const router = createBrowserRouter(routes);

// This is the main component of the app which wraps the router and query client
// I am also using React Query Devtools to help me debug my queries
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
