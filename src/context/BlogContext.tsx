import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Blog } from '../types/types';

interface BlogContextType {
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}

// BlogContext oluşturuluyor
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// useBlogsContext hook'u
// eslint-disable-next-line react-refresh/only-export-components
export const useBlogsContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogsContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

// BlogProvider, context'i sağlayan bileşen
export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
