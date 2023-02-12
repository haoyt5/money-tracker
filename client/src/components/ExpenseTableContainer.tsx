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
    return date.toLocaleDateString('en-US')
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
    console.log('pageData', pageData)
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {pageData.map((item) => (
                    <tr key={item._id}>
                        <td>{formatDate(item.createdAt)}</td>
                        <td>{item.category}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ExpenseTableContainer
