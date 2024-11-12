import { ReactNode } from "react";

export interface ContextType {
    blogs: Blog[]
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
}

export interface ContextProviderProps {
    children: ReactNode;
}

export interface LayoutProps {
    children: ReactNode
}

export interface CategoriesProps {
    categories: Array<Category>
    toggleDrawer: () => void
}

export interface Category {
    id: number
    categoryName: string
    blogs: Array<Blog>
}

export interface Blog {
    id: number
    title: string
    content: string
    date: string
    popularity: number
    image: string
    comments: Array<Comment>
}

export interface Comment {
    id: number
    comment: string
    rating: number
}