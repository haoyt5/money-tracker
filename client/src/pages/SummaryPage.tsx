import { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'
import SummaryTable from '../components/SummaryTable'
import useSubscribeFetch from '../hooks/useSubscribeFetch'

interface SummaryPageProps {}

const SummaryPage: FunctionComponent<SummaryPageProps> = () => {
    let location = useLocation()
    const { status, data } = useSubscribeFetch('/expenses/summary')
    return (
        <>
            <div>Expense summary:</div>
            <div>
                <SummaryTable status={status} data={data} />
            </div>
            <div className="text-center">
                <Link to={'/expense'} state={{ from: location.pathname }}>
                    <Button
                        color="info"
                        className="font-medium bg-blue-300 hover:bg-blue-400 border-0 "
                    >
                        Add Expenses
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default SummaryPage
