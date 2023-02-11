import { FunctionComponent } from 'react'
import { Button } from 'reactstrap'
import useFetch from '../hooks/useFetch'

interface ExpensesPageProps {}

const ExpensesPage: FunctionComponent<ExpensesPageProps> = () => {
    const { status, data } = useFetch('/expenses')
    console.log(status, data)
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
