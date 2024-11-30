import { Button, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchDataWithEffect } from '../../hooks/useFetchDataWithEffect';
import { BlogPostType, BlogType, CategoryType } from '../../types/types';
import { usePrivatePostData } from '../../hooks/usePrivatePostData';


const AddBlog = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const url = '/categories'
    const [categories, setCategories] = useState<CategoryType[]>([])
    const { data: categoryList } = useFetchDataWithEffect<CategoryType[]>(url)

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const authorId: number = location.state
    const [categoryId, setCategoryId] = useState<number | null>(null)

    const { data, post } = usePrivatePostData<BlogType, BlogPostType>()


    useEffect(() => {
        if (data) {
            alert('Blog başarıyla gönderildi! Yönlendiriliyorsunuz...')
            navigate(`/blog/${data.id}`)
        }

        if (categoryList) {
            setCategories(categoryList)
        }
    }, [data, categoryList])


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("authToken")
        if (categoryId && token) {
            const url = "/blogs"
            const body: BlogPostType = { title, content, image, authorId, categoryId }
            await post(url, body, token)
        }
    }

    return (

        <Grid2
            p={3}
            container
            size={6}
            spacing={2}
            justifySelf='center'
            justifyContent='center'
        >

            <Grid2
                size={8}
                textAlign='center'
                variant="h4"
                fontWeight='bold'
                color='blue'
                component={Typography}
                gutterBottom
            >
                Add Blog
            </Grid2>

            <form onSubmit={handleSubmit}>

                <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />


                <FormControl fullWidth margin="normal">

                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={categoryId ?? ''}
                        aria-hidden={categoryId === null ? "true" : "false"}
                        onChange={(e) => setCategoryId(Number(e.target.value))}
                        required
                    >
                        {categories.map((category: CategoryType, index) => (
                            <MenuItem key={index} value={category.id}>{category.categoryName}</MenuItem>
                        ))}

                    </Select>

                </FormControl>

                <TextField
                    label="Image URL"
                    fullWidth
                    margin="normal"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                <TextField
                    label="Content"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Share
                </Button>
            </form>
        </Grid2 >
    );
};

export default AddBlog
