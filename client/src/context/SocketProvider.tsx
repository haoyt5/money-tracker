import {
    createContext,
    FunctionComponent,
    useEffect,
    useRef,
    useContext,
} from 'react'
import { io, Socket } from 'socket.io-client'

const SERVER_DOMAIN = 'http://localhost:8080'

interface SocketProviderProps {
    children?: React.ReactNode
}
interface ContextProps {
    socket: null | Socket
}

export const SocketContext = createContext<ContextProps>({ socket: null })

const SocketProvider: FunctionComponent<SocketProviderProps> = ({
    children,
}) => {
    const socket = useRef(io(SERVER_DOMAIN))

    useEffect(() => {
        socket.current.on('connect', () => {
            console.log(`[socketIO]: connect to ${SERVER_DOMAIN}`)
        })

        socket.current.on('error', (message: string) => {
            console.error(`[socketIO]: error ${message}`)
        })
        return () => {
            if (socket && socket.current) {
                socket.current.removeAllListeners()
                socket.current.close()
            }
        }
    }, [])
    return (
        <SocketContext.Provider value={{ socket: socket.current }}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSubscribeSocketEvent = (
    eventName: string,
    eventHandler: (...args: any[]) => void
) => {
    // const [isConnected, setIsConnected] = useState(socket.connected)
    const { socket } = useContext(SocketContext)
    useEffect(() => {
        console.log('[socketIO]: adding listener', eventName)
        socket && socket.on(eventName, eventHandler)
        return () => {
            console.log('[socketIO]: remove listener', eventName)
            socket?.off(eventName, eventHandler)
        }
    }, [eventName])
}

export default SocketProvider
