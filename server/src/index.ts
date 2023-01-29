import express, { Application } from 'express'

const app: Application = express()
const port: number = 8080

app.get('/', (_req, _res) => {
    _res.send('TypeScript With express server')
})

app.listen(port, () => {
    console.log(`[express] server run on http://localhost:${port}/`)
})
