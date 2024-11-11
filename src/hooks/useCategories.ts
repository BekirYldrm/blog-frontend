import { useCallback } from 'react';
import { getCategories } from '../api/CategoriesApi';
import { useCustomContext } from './useCustomContext';

const useCategories = () => {

    const { setCatogeries, setShowCategories } = useCustomContext();

    const fetchCategories = useCallback(async () => {
        try {
            const data = await getCategories();
            setCatogeries(data)
            setShowCategories(true)
        } catch (error) {
            console.log(error)
        }
    }, [setCatogeries, setShowCategories])

    return fetchCategories;
}

export default useCategories