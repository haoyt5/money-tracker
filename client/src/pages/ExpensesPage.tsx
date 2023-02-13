import { FunctionComponent } from 'react'
import ExpenseTableContainer from '../components/ExpenseTableContainer'
import useSubscribeFetch from '../hooks/useSubscribeFetch'
import ExpenseForm from '../components/ExpenseForm'
import { Card } from 'reactstrap'
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
                <Card className="border-slate-100 p-3 shadow-sm shadow-zinc-500/40 ">
                    <ExpenseForm />
                </Card>
            </div>
            <div className="py-3">
                <h3 className="font-medium text-xl">Expense history:</h3>
            </div>

            <div className="pb-4">
                <Card className="border-0 py-3 shadow-sm shadow-zinc-500/40 ">
                    <ExpenseTableContainer status={status} data={data} />
                </Card>
            </div>
        </>
    )
}

export default ExpensesPage
