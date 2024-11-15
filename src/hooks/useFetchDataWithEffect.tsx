import { useState, useEffect } from 'react';
import { getData } from '../api/api';

export function useFetchDataWithEffect<T>(url: string) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const data: T = await getData<T>(url);
                setData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [url])

    return { data }
}
