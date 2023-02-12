import { FunctionComponent } from 'react'
import { Button } from 'reactstrap'
import ExpenseTableContainer from '../components/ExpenseTableContainer'
import useSubscribeFetch from '../hooks/useSubscribeFetch'

interface ExpensesPageProps {}

const ExpensesPage: FunctionComponent<ExpensesPageProps> = () => {
    // const [loading, setLoading] = useState(true)
    const { status, data } = useSubscribeFetch('/expenses')

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
            <div>
                <ExpenseTableContainer status={status} data={data} />
            </div>
        </>
    )
}

export default ExpensesPage
