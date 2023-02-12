import { FunctionComponent, useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import ExpenseTable from '../components/ExpenseTable'
import useSubscribeFetch from '../hooks/useSubscribeFetch'

interface ExpensesPageProps {}

const ExpensesPage: FunctionComponent<ExpensesPageProps> = () => {
    // const [loading, setLoading] = useState(true)
    const { status, data } = useSubscribeFetch('/expenses')

    return (
        <>
            <div>Add a new expense:</div>
            <div>
                <ExpenseTable status={status} data={data} />
            </div>
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
