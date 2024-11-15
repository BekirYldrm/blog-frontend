import { useState } from "react";
import { BlogType, ContextProviderProps } from "../types/types";
import { Context } from "./Context";

export const ContextProvider = ({ children }: ContextProviderProps) => {

    const [blogs, setBlogs] = useState<BlogType[]>([]);

    return (
        <Context.Provider value={{ blogs, setBlogs }}>
            {children}
        </Context.Provider>
    );
};