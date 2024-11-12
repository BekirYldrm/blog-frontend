import axios, { AxiosResponse } from 'axios';

export async function getData<T>(url: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}