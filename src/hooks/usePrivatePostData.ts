import { useState } from "react";
import { postPrivateData } from "../api/api";


interface UsePostDataResult<TRes, TReq> {
    data: TRes | null
    post: (url: string, body: TReq, token: string) => Promise<void>
}

export function usePrivatePostData<TRes, TReq>(): UsePostDataResult<TRes, TReq> {

    const [data, setData] = useState<TRes | null>(null)

    const post = async (url: string, body: TReq, token: string) => {
        const responseData = await postPrivateData<TRes, TReq>(url, body, token)
        setData(responseData)
    }

    return { data, post }
}
