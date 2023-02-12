import { FunctionComponent } from 'react'
import { Button } from 'reactstrap'
import useSubscribeFetch from '../hooks/useSubscribeFetch'

interface ExpensesPageProps {}

const ExpensesPage: FunctionComponent<ExpensesPageProps> = () => {
    const { status, data } = useSubscribeFetch('/expenses')
    console.log('[useSubscribeFetch]', status, data)

    return (
        <>
            <div>Add a new expense:</div>
            <div>
                <Button
                    color="info"
                    className="font-medium bg-blue-300 hover:bg-blue-400 border-0 "
                >
                    Confirm
                </Button>
            </div>
            <div>Expense history:</div>
        </>
    )
}

export default ExpensesPage
