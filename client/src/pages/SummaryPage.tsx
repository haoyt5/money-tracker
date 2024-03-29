import { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import SummaryTable from '../components/SummaryTable'
import useSubscribeFetch from '../hooks/useSubscribeFetch'

interface SummaryPageProps {}

const SummaryPage: FunctionComponent<SummaryPageProps> = () => {
    let location = useLocation()
    const { status, data } = useSubscribeFetch('/expenses/summary')

    return (
        <>
            <div className="py-3">
                <h3 className="font-medium text-xl">Expense summary:</h3>
            </div>
            <Card className="border-0 py-4 shadow-sm shadow-zinc-500/40">
                <div>
                    <SummaryTable status={status} data={data} />
                </div>
                <div className="text-center py-3">
                    <Link to={'/expense'} state={{ from: location.pathname }}>
                        <Button
                            color="primary"
                            className="ring active:ring border-0  bg-blue-500 font-medium disabled:text-zinc-600 disabled:bg-gray-400  hover:bg-blue-500 hover:text-gray-900 hover:ring hover:font-semi-bold  focus:text-black focus:bg-blue-500 focus:ring"
                        >
                            Add Expenses
                        </Button>
                    </Link>
                </div>
            </Card>
        </>
    )
}

export default SummaryPage
