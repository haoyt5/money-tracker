import express, { Application } from 'express'
import { AnyError } from 'mongodb'
import { Database, dbPath } from './Database'

const app: Application = express()
const port: number = 8080

app.get('/', (_req, _res) => {
    _res.send('TypeScript With express server')
})
app.listen(port, () => {
    console.log(`[express] server run on http://localhost:${port}/`)
})
const db = new Database()
db.connect((error: AnyError) => {
    if (!error) {
        console.log(`[express] server connect to db ${dbPath}/`)
    }
})
