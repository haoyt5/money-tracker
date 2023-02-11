import { createBrowserRouter } from 'react-router-dom'
import AuthRoot from './AuthRoot'
import ErrorPage from '../pages/ErrorPage'
import SummaryPage from '../pages/SummaryPage'
import ExpensesPage from '../pages/ExpensesPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoot />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <SummaryPage />,
            },
            {
                path: '/expense',
                element: <ExpensesPage />,
            },
        ],
    },
])
