import { useContext } from 'react';
import { Context } from '../contexts/Context';

export const useCustomContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('Context must be used with in a ContextProvider')
    }
    return context
};