import { Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchDataWithEffect } from "../../hooks/useFetchDataWithEffect";
import { BlogType } from "../../types/types";
import Blog from "./Blog";
import Comments from './Comments';


const ReadingArea = () => {

    const { id } = useParams()
    const url = `/blogs/${id}`
    const { data: blog } = useFetchDataWithEffect<BlogType>(url)


    if (!blog) {
        return (
            <Typography>Loading Data ...</Typography>
        )
    }

    return (
        <>
            <Grid2
                container
                size={{ xs: 11, md: 10, lg: 8.5 }}
                mb={3}
            >
                <Blog blog={blog} />
            </Grid2>

            <Grid2
                container
                size={{ xs: 12, lg: 3.5 }}
                justifyContent={'center'}
                spacing={1.5} py={4} px={2}
                position={{ xs: 'static', lg: 'sticky' }}
                zIndex={10} top={'20vh'}
                maxHeight={{ xs: 400, lg: 500 }} overflow={'auto'}
            >
                <Comments comments={blog.comments} />
            </Grid2 >

        </>
    );
}

export default ReadingArea