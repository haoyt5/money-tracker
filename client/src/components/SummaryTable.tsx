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
const formatUSD = (amount: string) => Number(amount).toFixed(2)
const SummaryTable: FunctionComponent<SummaryTableProps> = ({
    status,
    data,
}) => {
    return (
        <Table striped className="font-medium">
            <thead>
                <tr>
                    <th style={{ paddingLeft: '40px' }}>Category</th>
                    <th style={{ paddingRight: '40px' }} className="text-end">
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ paddingLeft: '40px' }}>Bills</td>
                    <td style={{ paddingRight: '40px' }} className="text-end">
                        ${data && formatUSD(data.bills)}
                    </td>
                </tr>
                <tr>
                    <td style={{ paddingLeft: '40px' }}>Grocery</td>
                    <td style={{ paddingRight: '40px' }} className="text-end">
                        ${data && formatUSD(data.grocery)}
                    </td>
                </tr>
                <tr>
                    <td style={{ paddingLeft: '40px' }}>Health</td>
                    <td style={{ paddingRight: '40px' }} className="text-end">
                        ${data && formatUSD(data.health)}
                    </td>
                </tr>
                <tr>
                    <td style={{ paddingLeft: '40px' }}>Travel</td>
                    <td style={{ paddingRight: '40px' }} className="text-end">
                        ${data && formatUSD(data.travel)}
                    </td>
                </tr>
                <tr>
                    <td style={{ paddingLeft: '40px' }}>Others</td>
                    <td style={{ paddingRight: '40px' }} className="text-end">
                        ${data && formatUSD(data.others)}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default SummaryTable
