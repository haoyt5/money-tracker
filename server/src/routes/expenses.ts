import { Router, Request, Response } from 'express'
import { Expense } from '../models/expense'
// import auth from '../middlewares/auth'
// import validator from '../middlewares/validator'

const app = Router()
const CATEGORY_TYPE = ['bills', 'grocery', 'health', 'travel', 'others']
app.post('/', async (req: Request, res: Response) => {
    try {
        if (
            !req.body.amount ||
            !req.body.category ||
            !CATEGORY_TYPE.includes(req.body.category)
        ) {
            return res.status(422).json({ message: 'invalid body', data: {} })
        }
        const amount = req.body.amount
        const category = req.body.category
        const expense = new Expense({ user: 'default', amount, category })
        const newExpense = await expense.save()
        return res.status(200).json({ data: { newExpense } })
    } catch (e) {
        return res.status(500).json({ message: JSON.stringify(e) })
    }
})
app.get('/', async (_req, res: Response) => {
    return res.status(200).json({ data: 'GET: /expenses' })
})
app.get('/summary', async (_req, res: Response) => {
    console.log('GET: /expenses/summary')
    return res.status(200).json({ data: 'GET: /expenses/summary' })
})

export default app
