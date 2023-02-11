import { useState, useEffect } from 'react'

const useFetch = (endpoint: string) => {
    const [status, setStatus] = useState('idle')
    const [data, setData] = useState([])

    useEffect(() => {
        if (!endpoint) return

        const fetchData = async () => {
            setStatus('fetching')
            const response = await fetch(`http://localhost:8080${endpoint}`)
            const data = await response.json()
            setData(data)
            setStatus('fetched')
        }
        fetchData()
    }, [endpoint])

    return { status, data }
}
export default useFetch
