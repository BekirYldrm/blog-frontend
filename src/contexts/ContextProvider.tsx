import { useState } from "react";
import { Blog, Category, ContextProviderProps } from "../types/types";
import { Context } from "./Context";

export const ContextProvider = ({ children }: ContextProviderProps) => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    return (
        <Context.Provider value={{ blogs, setBlogs }}>
            {children}
        </Context.Provider>
    );
};