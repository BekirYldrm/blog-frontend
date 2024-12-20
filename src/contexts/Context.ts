import { createContext } from 'react';
import { ContextType } from '../types/types';

export const Context = createContext<ContextType | undefined>(undefined);

