import { useState, useEffect } from 'react'
import { useSubscribeSocketEvent } from '../context/SocketProvider'

const useSubscribeFetch = (endpoint: string) => {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState(null)
    const [reFetch, setRefetch] = useState(true)
    const handleSocketEvent = () => {
        setRefetch(true)
    }
    useSubscribeSocketEvent('add-expense', handleSocketEvent)

    useEffect(() => {
        if (!endpoint) return
        const fetchData = async () => {
            setStatus('fetching')
            setData(null)
            const response = await fetch(`http://localhost:8080${endpoint}`)
            const data = await response.json()
            setData(data.data)
            setStatus('fetched')
            setRefetch(false)
        }
        if (reFetch) {
            fetchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reFetch])

    return { status, data }
}
export default useSubscribeFetch
