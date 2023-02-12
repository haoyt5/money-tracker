import { Schema, model } from 'mongoose'
// import { expenseCategory, IExpense } from './expense.d'

export enum expenseCategory {
    bills = 'bills',
    grocery = 'grocery',
    health = 'health',
    travel = 'travel',
    others = 'others',
}
export interface IExpense {
    user: string
    category: string
    amount: number
}

const expenseSchema = new Schema<IExpense>(
    {
        user: { type: String, required: true },
        category: {
            type: String,
            enum: Object.values(expenseCategory),
            default: 'others',
            required: true,
        },
        amount: {
            type: Number,
            default: 0.0,
            required: true,
        },
    },
    { timestamps: true }
)

export const Expense = model<IExpense>('Expense', expenseSchema)
