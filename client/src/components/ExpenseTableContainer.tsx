import { FunctionComponent, useEffect, useState } from 'react'
import { Table } from 'reactstrap'

type Expense = {
    _id: string
    category: string
    bills: string
    amount: string
    createdAt: string
}
interface ExpenseTableContainerProps {
    status: string
    data: null | { expenses: Expense[] }
}
const formatDate = (ISODateString: string) => {
    const date = new Date(ISODateString)
    const localeString = date.toLocaleDateString('en-US')
    const mmdd = localeString.substring(0, localeString.length - 4)
    const year = date.getFullYear().toString()
    const yy = year[2] + year[3]
    return mmdd + yy
}
const ExpenseTableContainer: FunctionComponent<ExpenseTableContainerProps> = ({
    status,
    data,
}) => {
    const [pageData, setPageData] = useState<Expense[] | []>([])

    useEffect(() => {
        if (data && status === 'fetched') {
            const tenItems = data.expenses.slice(0 * 10, (0 + 1) * 10)
            setPageData(tenItems)
        }
    }, [status, data])

    return (
        <Table striped className="font-medium">
            <thead>
                <tr>
                    <th style={{ paddingLeft: '40px' }}>Date</th>
                    <th>Category</th>
                    <th className="text-end" style={{ paddingRight: '40px' }}>
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {pageData.map((item) => (
                    <tr key={item._id}>
                        <td style={{ paddingLeft: '40px' }}>
                            {formatDate(item.createdAt)}
                        </td>
                        <td className="text-capitalize">{item.category}</td>
                        <td
                            className="text-end"
                            style={{ paddingRight: '40px' }}
                        >
                            {'$' + Number(item.amount).toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ExpenseTableContainer
