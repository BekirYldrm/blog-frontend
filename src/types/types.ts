import { ReactNode } from "react";

export interface ContextType {
    blogs: Blog[]
    categories: Category[]
    showCategories: boolean
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
    setCatogeries: React.Dispatch<React.SetStateAction<Category[]>>
    setShowCategories: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ContextProviderProps {
    children: ReactNode;
}

export interface LayoutProps {
    children: ReactNode
}

export interface CategoriesProps {
    categories: Array<Category>;
    clicked: (blogs: Blog[]) => void;
    toggleDrawer: () => void;
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