import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get('https://blog-backend-5uhs.onrender.com/categories')
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}