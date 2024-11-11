import { useState } from "react";
import { Blog, Category, ContextProviderProps } from "../types/types";
import { Context } from "./Context";

export const ContextProvider = ({ children }: ContextProviderProps) => {

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [categories, setCatogeries] = useState<Category[]>([])
    const [showCategories, setShowCategories] = useState(false);

    return (
        <Context.Provider value={{ blogs, setBlogs, showCategories, setShowCategories, categories, setCatogeries }}>
            {children}
        </Context.Provider>
    );
};