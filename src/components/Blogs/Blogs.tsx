import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useCustomContext } from '../../hooks/useCustomContext.js';
import { BlogType } from '../../types/types';
import BlogItem from './BlogItem';

const Blogs = () => {
  const { blogs } = useCustomContext();

  return (
    <section id='blogs'>

      <Grid container>
        {blogs.map((blog: BlogType, index) => (
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