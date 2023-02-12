import { FunctionComponent } from 'react'
import { Table } from 'reactstrap'

type Summary = {
    bills: string
    grocery: string
    health: string
    travel: string
    others: string
}

// type Response = {
//     message: string
//     data: Summary
// }

interface SummaryTableProps {
    status: string
    data: null | Summary
}

const SummaryTable: FunctionComponent<SummaryTableProps> = ({
    status,
    data,
}) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bills</td>
                    <td>{data && data.bills}</td>
                </tr>
                <tr>
                    <td>Grocery</td>
                    <td>{data && data.grocery}</td>
                </tr>
                <tr>
                    <td>Health</td>
                    <td>{data && data.health}</td>
                </tr>
                <tr>
                    <td>Travel</td>
                    <td>{data && data.travel}</td>
                </tr>
                <tr>
                    <td>Others</td>
                    <td>{data && data.others}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SummaryTable
