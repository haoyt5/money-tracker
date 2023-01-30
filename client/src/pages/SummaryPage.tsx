import { FunctionComponent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'reactstrap'
interface SummaryPageProps {}

const SummaryPage: FunctionComponent<SummaryPageProps> = () => {
    let location = useLocation()
    return (
        <>
            <div>Expense summary:</div>
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
