import { BookmarkAdd, Favorite } from "@mui/icons-material"
import { Card, CardActions, CardContent, CardMedia, Grid2, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { BlogType } from "../../types/types"
import Author from "./Author"


const Blog = ({ blog }: { blog: BlogType }) => {
    return (
        <Card sx={{ width: '100%' }}>
            <Box borderBottom={2}>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
                    <IconButton aria-label="save">
                        <BookmarkAdd />
                    </IconButton>
                    <Box display="flex" alignItems="center" mx={2}>
                        <IconButton aria-label="like">
                            <Favorite />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" ml={2} fontSize={30}>
                            {blog.popularity}
                        </Typography>
                    </Box>
                </CardActions>
            </Box>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" p={1} mb={1}>
                    <Typography variant="body2" color="text.secondary">
                        {blog && new Date(blog.date).toLocaleDateString()}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {blog && new Date(blog.date).toLocaleTimeString()}
                    </Typography>
                </Box>

                <CardMedia
                    component="img" image={blog.image} alt="blog image"
                    sx={{
                        objectFit: "contain",
                        maxWidth: '80%',
                        mx: 'auto',
                        p: 1
                    }}
                />

                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom textAlign={'center'}>
                        {blog.title}
                    </Typography>
                    <Typography variant="body1" color="text.primary" gutterBottom>
                        {blog.content}
                    </Typography>
                </CardContent>
            </CardContent>

            <Grid2 container display={{ xs: 'flex', lg: 'none' }}
                justifyContent={'end'} pr={2} textAlign={'center'} height={'min-content'} >
                <Author />
            </Grid2 >

        </Card >
    )
}

export default Blog