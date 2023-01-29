import mongoose from 'mongoose'
// import { Expense } from '../models/expense'
export const dbPath: string = 'mongodb://127.0.0.1:27017/money-tracker'

export class Database {
    connection: null | Object

    constructor() {
        this.connection = null
    }
    async connect(cb: Function) {
        try {
            const client = await mongoose.connect(dbPath)
            this.connection = client
            // const expense = new Expense({
            //     user: 'test',
            //     category: 'bills',
            //     amount: '35',
            // })
            // await expense.save()
            return cb()
        } catch (error) {
            console.log('[mongodb]' + error)
            return cb(error)
        }
    }
    getConnection() {
        return this.connection
    }
}
