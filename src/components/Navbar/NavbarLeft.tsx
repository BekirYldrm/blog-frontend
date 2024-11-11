import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useCategories from "../../hooks/useCategories";
import { useCustomContext } from "../../hooks/useCustomContext";
import { Blog } from "../../types/types";
import Categories from "../Categories";

const NavbarLeft = () => {

    const navigate = useNavigate();
    const { categories, showCategories, setBlogs, setShowCategories } = useCustomContext();
    const fetchCategories = useCategories()


    const clicked = (blogs: Blog[]): void => {
        setBlogs(blogs)
    }

    const toggleDrawer = () => {
        setShowCategories(prev => !prev);
    };


    return (
        <Box display={{ xs: 'none', md: 'flex' }} alignItems='center' flex={1}>

            <Typography
                component={HashLink} to="/#about"
                fontSize={{ md: 14, lg: 20 }} fontWeight='bold'
                color="warning" mx={{ md: 1, lg: 2 }}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
            > ABOUT </Typography>

            <Typography onClick={fetchCategories}
                fontSize={{ md: 14, lg: 20 }} fontWeight='bold'
                color="warning" mx={{ md: 1, lg: 2 }}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
            > BLOGS </Typography>


            <Typography component="a" onClick={() => navigate(`/authors`)}
                fontSize={{ md: 14, lg: 20 }} fontWeight='bold'
                color="warning" mx={{ md: 1, lg: 2 }}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
            > AUTHORS </Typography>

            <Typography component={HashLink} to="/#contact"
                fontSize={{ md: 14, lg: 20 }} fontWeight='bold'
                color="warning" mx={{ md: 1, lg: 2 }}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
            > CONTACT </Typography>

            {showCategories && <Categories categories={categories} clicked={clicked} toggleDrawer={toggleDrawer} />}

        </Box>
    )
}

export default NavbarLeft