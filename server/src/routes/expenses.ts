import { Router, Request, Response } from 'express'
import { Expense } from '../models/expense'
import { io } from '../index'

const app = Router()
const CATEGORY_TYPE = ['bills', 'grocery', 'health', 'travel', 'others']
app.post('/', async (req: Request, res: Response) => {
    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
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
        const { _id, createdAt } = await expense.save()

        io.emit('add-expense')
        return res.status(202).json({
            message: 'create expense successfully',
            data: { id: _id, createdAt, amount, category },
        })
    } catch (e) {
        return res.status(500).json({ message: JSON.stringify(e) })
    }
})
app.get('/', async (_req, res: Response) => {
    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
        const expenses = await Expense.find(
            {},
            { amount: 1, category: 1, createdAt: 1 }
        ).sort('-createdAt')
        return res.status(200).json({
            message: 'get expense successfully',
            data: { expenses },
        })
    } catch (e) {
        return res.status(500).json({ message: JSON.stringify(e) })
    }
})
app.get('/summary', async (_req, res: Response) => {
    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
        const summary = {
            bills: 0,
            grocery: 0,
            health: 0,
            travel: 0,
            others: 0,
        }
        const updateSummary = await Expense.aggregate([
            {
                $group: {
                    _id: '$category',
                    amount: { $sum: '$amount' },
                },
            },
        ])
        updateSummary.map((item) => {
            const k = item._id as keyof typeof summary
            const amount = item.amount
            summary[k] = amount
        })
        return res.status(200).json({
            message: 'get summary successfully',
            data: { ...summary },
        })
    } catch (e) {
        return res.status(500).json({ message: JSON.stringify(e) })
    }
})

export default app
