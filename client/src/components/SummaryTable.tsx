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
        <Table striped className="font-medium">
            <thead>
                <tr>
                    <th>Category</th>
                    <th className="text-end">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bills</td>
                    <td className="text-end">${data && data.bills}</td>
                </tr>
                <tr>
                    <td>Grocery</td>
                    <td className="text-end">${data && data.grocery}</td>
                </tr>
                <tr>
                    <td>Health</td>
                    <td className="text-end">${data && data.health}</td>
                </tr>
                <tr>
                    <td>Travel</td>
                    <td className="text-end">${data && data.travel}</td>
                </tr>
                <tr>
                    <td>Others</td>
                    <td className="text-end">${data && data.others}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SummaryTable
