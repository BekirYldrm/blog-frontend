import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useCustomContext } from "../../hooks/useCustomContext";
import { useFetchData } from "../../hooks/useFetchData";
import { BlogType, CategoriesProps, CategoryType } from "../../types/types";


const Categories = ({ categories, toggleDrawer }: CategoriesProps) => {
  const url = '/blogs'

  const { setBlogs } = useCustomContext();

  const { data: allBlogs, fetchData: fetchAllBlogs } = useFetchData<BlogType[]>(url)
  const { data: sortedBlogsByDate, fetchData: fetchSortedBlogsByDate } = useFetchData<BlogType[]>(url + '?sort=date')
  const { data: sortedBlogsByPopularity, fetchData: fetchSortedBlogsByPopularity } = useFetchData<BlogType[]>(url + '?sort=popularity')

  const handleCategoryClick = (blogs: BlogType[]) => {
    setBlogs(blogs)
    toggleDrawer()
  }

  useEffect(() => {

    try {
      if (allBlogs) {
        handleCategoryClick(allBlogs)
      }
      else if (sortedBlogsByPopularity) {
        handleCategoryClick(sortedBlogsByPopularity)
      }
      else if (sortedBlogsByDate) {
        handleCategoryClick(sortedBlogsByDate)
      }
    }
    catch (error) { console.log(error) }

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

          {categories.map((category: CategoryType, index) => (
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
