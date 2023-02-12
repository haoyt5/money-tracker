import { useState, useEffect } from 'react'
import { useSubscribeSocketEvent } from '../context/SocketProvider'

const useSubscribeFetch = (endpoint: string) => {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState({})
    const [reFetch, setRefetch] = useState(true)
    const handleSocketEvent = () => {
        setRefetch(true)
    }
    useSubscribeSocketEvent('expenses-updated', handleSocketEvent)

    useEffect(() => {
        if (!endpoint) return
        const fetchData = async () => {
            setStatus('fetching')
            setData({})
            const response = await fetch(`http://localhost:8080${endpoint}`)
            const data = await response.json()
            setData(data)
            setStatus('fetched')
            setRefetch(false)
        }
        if (reFetch) {
            fetchData()
        }
    }, [reFetch])

    return { status, data }
}
export default useSubscribeFetch
