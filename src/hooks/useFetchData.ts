import { useState, useCallback } from 'react';
import { getData } from '../api/api';

export function useFetchData<T>(url: string) {
    const [data, setData] = useState<T | null>(null)

    const fetchDataAsync = useCallback(async () => {

        try {
            const data: T = await getData<T>(url);
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }, [url])

    return { data, fetchData: fetchDataAsync }
}
