import axios, { AxiosResponse } from 'axios';

const api = axios.create({
    baseURL: 'https://blog-backend-5uhs.onrender.com',
});

export async function getData<T>(url: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await api.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export async function postData<T>(url: string, data: any): Promise<T> {
    try {
        const response: AxiosResponse<T> = await api.post(url, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to post data');
    }
}

export async function getPrivateData<T>(url: string, token: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await api.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },

        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}