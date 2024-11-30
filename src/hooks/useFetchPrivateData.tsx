import { useEffect, useState } from 'react';
import { getPrivateData } from '../api/api';

export function useFetchPrivateData<T>(url: string, token: string) {
    const [data, setData] = useState<T | null>(null)

    useEffect(() => {

        if (token) {
            const fetchData = async () => {
                try {
                    const data: T = await getPrivateData<T>(url, token)
                    setData(data)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchData()
        }
    }, [url, token])

    return { data }
}
