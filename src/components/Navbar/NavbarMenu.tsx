import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useFetchData } from '../../hooks/useFetchData';
import { Category } from '../../types/types';
import Categories from '../Categories';

const NavbarMenu = () => {

    const url = 'https://blog-backend-5uhs.onrender.com/categories'

    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([])
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { data: categoryList, fetchData: fetchCategories } = useFetchData<Category[]>(url)

    const toggleDrawer = () => setShowCategories(prev => !prev);
    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    useEffect(() => { if (categoryList) { setCategories(categoryList); setShowCategories(true) } }, [categoryList])

    return (
        <Box display={{ xs: 'flex', md: 'none' }} flex={1}>
            <Tooltip title='Menu' arrow>
                <IconButton onClick={handleOpenNavMenu} color="inherit" >
                    <MenuIcon sx={{ fontSize: { xs: 20, sm: 25 } }} /></IconButton>
            </Tooltip>

            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography component={HashLink} to="/#about" fontSize={{ xs: 12, sm: 14 }}
                        color='textPrimary' sx={{ textDecoration: 'none' }}
                    >About</Typography>
                </MenuItem>
                <MenuItem onClick={() => { handleCloseNavMenu(); fetchCategories() }}>
                    <Typography fontSize={{ xs: 12, sm: 14 }} color='textPrimary' sx={{ textDecoration: 'none' }}
                    > Blogs </Typography>
                </MenuItem>
                <MenuItem onClick={() => { handleCloseNavMenu(); navigate(`/authors`) }}>
                    <Typography fontSize={{ xs: 12, sm: 14 }} color='textPrimary'> Authors </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography component={HashLink} to="/#contact" fontSize={{ xs: 12, sm: 14 }}
                        color='textPrimary' sx={{ textDecoration: 'none' }}
                    > Contact </Typography>
                </MenuItem>
            </Menu>
            {showCategories && <Categories categories={categories} toggleDrawer={toggleDrawer} />}

        </Box>
    )
}

export default NavbarMenu