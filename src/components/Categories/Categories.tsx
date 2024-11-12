import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useCustomContext } from "../../hooks/useCustomContext";
import { useFetchData } from "../../hooks/useFetchData";
import { Blog, CategoriesProps, Category } from "../../types/types";


const Categories = ({ categories, toggleDrawer }: CategoriesProps) => {
  const url = 'https://blog-backend-5uhs.onrender.com/blogs'

  const { setBlogs } = useCustomContext();

  const { data: allBlogs, fetchData: fetchAllBlogs } = useFetchData<Blog[]>(url)
  const { data: sortedBlogsByDate, fetchData: fetchSortedBlogsByDate } = useFetchData<Blog[]>(url + '?sort=date')
  const { data: sortedBlogsByPopularity, fetchData: fetchSortedBlogsByPopularity } = useFetchData<Blog[]>(url + '?sort=popularity')

  const handleCategoryClick = (blogs: Blog[]) => {
    setBlogs(blogs)
    toggleDrawer()
  }

  useEffect(() => {
    if (allBlogs) {
      handleCategoryClick(allBlogs)
    }
    else if (sortedBlogsByPopularity) {
      handleCategoryClick(sortedBlogsByPopularity)
    }
    else if (sortedBlogsByDate) {
      handleCategoryClick(sortedBlogsByDate)
    }
  }, [allBlogs, sortedBlogsByPopularity, sortedBlogsByDate])

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{ width: 240, flexShrink: 0, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', } }}
        anchor="right" variant="temporary" open={true} onClose={toggleDrawer} ModalProps={{ keepMounted: true }}
      >
        <List>
          <ListItem component={HashLink} to="/#blogs" onClick={fetchAllBlogs} >
            <Typography>All Blogs</Typography>
          </ListItem>
          <ListItem component={HashLink} to="/#blogs" onClick={fetchSortedBlogsByPopularity}>
            <Typography>Sort by Popularity</Typography>
          </ListItem>
          <ListItem component={HashLink} to="/#blogs" onClick={fetchSortedBlogsByDate}>
            <Typography>Sort by Date</Typography>
          </ListItem>

          {categories.map((category: Category, index) => (
            <ListItem component={HashLink} to="/#blogs" key={index} onClick={() => handleCategoryClick(category.blogs)}>
              <Typography>{category.categoryName}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box >
  )
}
export default Categories
