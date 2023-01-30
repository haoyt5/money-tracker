import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
interface SummaryPageProps {}

const SummaryPage: FunctionComponent<SummaryPageProps> = () => {
    return (
        <>
            <div>Expense summary:</div>
            <div>
                <Link to={'/expense'}>
                    <Button
                        color="info"
                        className="font-medium bg-blue-300 hover:bg-blue-400 border-0 "
                    >
                        {' '}
                        Add Expenses
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default SummaryPage
