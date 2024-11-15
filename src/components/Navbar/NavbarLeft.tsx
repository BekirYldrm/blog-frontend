import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useFetchData } from "../../hooks/useFetchData";
import { CategoryType } from "../../types/types";
import Categories from "../Categories";

const NavbarLeft = () => {
    const url = 'https://blog-backend-5uhs.onrender.com/categories'

    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryType[]>([])
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const { data: categoryList, fetchData: fetchCategories } = useFetchData<CategoryType[]>(url)

    const toggleDrawer = () => setShowCategories(prev => !prev)

    useEffect(() => { if (categoryList) { setCategories(categoryList); setShowCategories(true) } }, [categoryList])

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

            {showCategories && <Categories categories={categories} toggleDrawer={toggleDrawer} />}

        </Box>
    )
}
export default NavbarLeft