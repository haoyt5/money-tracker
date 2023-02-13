import { FunctionComponent } from 'react'
import ExpenseTableContainer from '../components/ExpenseTableContainer'
import useSubscribeFetch from '../hooks/useSubscribeFetch'
import ExpenseForm from '../components/ExpenseForm'
interface ExpensesPageProps {}

const ExpensesPage: FunctionComponent<ExpensesPageProps> = () => {
    // const [loading, setLoading] = useState(true)
    const { status, data } = useSubscribeFetch('/expenses')

    return (
        <>
            <div className="py-3">
                <h3 className="font-medium text-xl">Add a new expense:</h3>
            </div>

            <div>
                <ExpenseForm />
            </div>
            <div className="py-3">
                <h3 className="font-medium text-xl">Expense history:</h3>
            </div>

            <div>
                <ExpenseTableContainer status={status} data={data} />
            </div>
        </>
    )
}

export default ExpensesPage
