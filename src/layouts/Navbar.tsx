import { AppBar, Toolbar } from '@mui/material';

import NavbarLeft from './NavbarLeft';
import NavbarCenter from './NavbarCenter';
import NavbarRight from './NavbarRight';
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="sticky" color="inherit" elevation={0}

            sx={{
                height: { xs: '50px', sm: '65px', md: '80px', lg: '95px' },
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
            }}

        ><Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <NavbarMenu
                    anchorElNav={anchorElNav}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                />
                <NavbarLeft />
                <NavbarCenter />
                <NavbarRight />
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
