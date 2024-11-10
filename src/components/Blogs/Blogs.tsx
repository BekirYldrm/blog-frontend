import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useBlogsContext } from '../../context/BlogContext';
import { Blog } from '../../types/types';
import BlogItem from './BlogItem';

const Blogs = () => {
  const { blogs } = useBlogsContext();

  return (
    <section id='blogs'>

      <Grid container>
        {blogs.map((blog: Blog, index) => (
          <Grid justifyContent='center' container size={{ xs: 12, sm: 6, md: 4, lg: 3 }} p={2} key={index}>
            <Box>
              <BlogItem blog={blog} />
            </Box>
          </Grid>
        ))}

      </Grid>
    </section>

  )
}

export default Blogs