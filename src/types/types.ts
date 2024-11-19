import { ReactNode } from "react";

export interface ContextType {
    blogs: BlogType[]
    setBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>
}

export interface ContextProviderProps {
    children: ReactNode;
}

export interface LayoutProps {
    children: ReactNode
}

export interface CategoriesProps {
    categories: Array<CategoryType>
    toggleDrawer: () => void
}

export interface CategoryType {
    id: number
    categoryName: string
    blogs: Array<BlogType>
}

export interface BlogType {
    id: number
    title: string
    content: string
    date: string
    popularity: number
    image: string
    comments: Array<CommentType>
}

export interface CommentType {
    id: number
    comment: string
    rating: number
}

export interface AuthorType {
    email: string
    password: string
    myBlogs: Array<BlogType>
    authorDetails: AuthorResDTO
}


export interface AuthorResDTO {
    id: number
    firstName: string
    lastName: string
    image: string
}

export interface AuthorCustomDTO {
    id: number
    firstName: string
    lastName: string
    image: string
    myBlogs: Array<BlogType>
}

export interface UserCommentDTO {
    username: string
    image: string
}

