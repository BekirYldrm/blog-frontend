import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Blog } from '../../types/types';
import { Box } from '@mui/material';

const BlogItem = ({ blog }: { blog: Blog }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        E
                    </Avatar>
                }
                title={blog.title}
                subheader={blog.date.replace("T", " ")}
            />
            <CardMedia
                component="img"
                height="194"
                image={blog.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {blog.content.substring(0, 100) + "..."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <IconButton aria-label="add to favorites" >
                            <FavoriteIcon />
                        </IconButton>
                        <Typography variant="body2" sx={{ marginLeft: 1 }}>
                            {blog.popularity}
                        </Typography>
                    </Box>
                    <IconButton aria-label="add to saved">
                        <BookmarkAddIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}

export default BlogItem;
