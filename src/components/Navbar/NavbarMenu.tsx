import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useCategories from '../../hooks/useCategories';
import { useCustomContext } from '../../hooks/useCustomContext';
import { Blog } from '../../types/types';
import Categories from '../Categories';





const NavbarMenu = () => {
    const navigate = useNavigate();
    const { categories, showCategories, setBlogs, setShowCategories } = useCustomContext();
    const fetchCategories = useCategories()

    const clicked = (blogs: Blog[]): void => {
        setBlogs(blogs)
    }

    const toggleDrawer = () => {
        setShowCategories(prev => !prev);
    };

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);


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
            {showCategories && <Categories categories={categories} clicked={clicked} toggleDrawer={toggleDrawer} />}

        </Box>
    )
}

export default NavbarMenu