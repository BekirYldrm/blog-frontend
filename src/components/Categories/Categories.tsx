import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { Blog, CategoriesProps, Category } from "../../../types/types";
import { HashLink } from "react-router-hash-link";

const Categories = ({ categories, clicked, toggleDrawer }: CategoriesProps) => {

  const handleCategoryClick = (blogs: Blog[]) => {
    clicked(blogs);
    toggleDrawer();
  };

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        anchor="right"
        variant="temporary"
        open={true}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {categories.map((category: Category, index) => (
            <ListItem component={HashLink} to="/#blogs" key={index} onClick={() => handleCategoryClick(category.blogs)}>
              <Typography  >{category.categoryName}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Categories;
