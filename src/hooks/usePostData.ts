import { useState } from "react";
import { postData } from "../api/api";


interface UsePostDataResult<T> {
    data: T | null
    post: (url: string, body: any) => Promise<void>
}

export function usePostData<T>(): UsePostDataResult<T> {
    const [data, setData] = useState<T | null>(null);

    const post = async (url: string, body: any) => {
        const responseData = await postData<T>(url, body)
        setData(responseData)
    }

    return { data, post }
}
