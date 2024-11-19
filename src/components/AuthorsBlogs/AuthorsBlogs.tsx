import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useFetchDataWithEffect } from "../../hooks/useFetchDataWithEffect"
import { AuthorCustomDTO, BlogType } from "../../types/types"
import BlogItem from "../Blogs/BlogItem"

const AuthorsBlogs = () => {
    const { id } = useParams()
    const url = `https://blog-backend-5uhs.onrender.com/authors/${id}`
    const { data: author } = useFetchDataWithEffect<AuthorCustomDTO>(url)

    return (
        <Grid2 container>
            {author ? (

                <Grid2 container p={2} >

                    {author.myBlogs.length > 0 ? author.myBlogs.map((blog: BlogType, index) => (
                        <Grid2 justifyContent='center' container size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={2} key={index}>
                            <BlogItem blog={blog} />
                        </Grid2>
                    )) : <Typography variant="h5" justifyContent='center' >Henüz paylaşımda bulunmamış.</Typography>
                    }
                </Grid2>

            )
                :
                <p>Loading data ..</p>}

        </Grid2>



    )
}

export default AuthorsBlogs