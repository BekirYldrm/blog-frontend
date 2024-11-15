import { BookmarkAdd, Favorite } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BlogType } from '../../types/types';

const BlogItem = ({ blog }: { blog: BlogType }) => {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345, height: '100%' }} onClick={() => navigate(`/blog/${blog.id}`)}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: 'red' }} aria-label="avatar">E</Avatar>}
                title={blog.title.length > 30 ? blog.title.substring(0, 30) + "..." : blog.title}
                subheader={blog.date.replace("T", " ")}
            />
            <CardMedia
                component="img"
                height="194"
                image={blog.image}
                alt="Blog Image"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {blog.content.substring(0, 120) + "..."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <IconButton aria-label="add to favorites" >
                            <Favorite />
                        </IconButton>
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>
                            {blog.popularity}
                        </Typography>
                    </Box>
                    <IconButton aria-label="add to saved">
                        <BookmarkAdd />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}

export default BlogItem;
