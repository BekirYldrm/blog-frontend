// useBlogs.ts
import axios from 'axios';
import { useCallback, useState } from 'react';
import { Category } from '../types/types';

export const useCategories = () => {
    const [categories, setCatogeries] = useState<Category[]>([])
   
    const [showCategories, setShowCategories] = useState(false);

    const fetchCategories = useCallback(async () => {
        axios
            .get('https://blog-backend-5uhs.onrender.com/categories')
            .then(res => setCatogeries(res.data)).then(() => setShowCategories(true))
            .catch(e => console.log(e))
    }, [])

    return { fetchCategories, categories, setCatogeries, showCategories, setShowCategories };
};
