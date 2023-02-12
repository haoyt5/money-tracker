import express, { Application } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { AnyError } from 'mongodb'
import { Database, dbPath } from './db/Database'
import routes from './routes'
const app: Application = express()
const port: number = 8080
const clientOrigin: string = 'http://localhost:3000'

const httpServer = createServer(app)

export const io = new Server(httpServer, {
    cors: {
        origin: clientOrigin,
    },
})

app.use(
    express.json({
        type: ['application/json', 'text/plain'],
    })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (_req, _res) => {
    _res.send('TypeScript With express server')
})

// app.listen(port, () => {
//     console.log(`[express] server run on http://localhost:${port}/`)
// })

routes(app)

httpServer.listen(port, () => {
    console.log(`[express] server run on http://localhost:${port}/`)
})
const db = new Database()
db.connect((error: AnyError) => {
    if (!error) {
        console.log(`[express] server connect to db ${dbPath}/`)
    }
})

io.on('connection', function (socket) {
    console.log('[httpServer: socket.io] client connected')

    socket.on('disconnect', () => {
        console.log('[httpServer: socket.io] client disconnected')
    })

    // socket.on('chat message', function (msg) {
    //     console.log('Received a chat message')
    //     io.emit('chat message', msg)
    // })
})
