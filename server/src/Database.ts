import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

export const dbPath: string = 'mongodb://127.0.0.1:27017/money-tracker'

export class Database {
    connection: null | Object

    constructor() {
        this.connection = null
    }
    // async connect(cb: Function) {
    //     try {
    //         const client = await MongoClient.connect(dbPath)
    //         this.connection = client.db()
    //         return cb()
    //     } catch (error) {
    //         console.log('[mongodb]' + error)
    //         return cb(error)
    //     }
    // }
    async connect(cb: Function) {
        try {
            const client = await mongoose.connect(dbPath)
            this.connection = client
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
