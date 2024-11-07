import { AppBar, Toolbar } from '@mui/material';

import NavbarLeft from './NavbarLeft';
import NavbarCenter from './NavbarCenter';
import NavbarRight from './NavbarRight';

const Navbar = () => {
    return (
        <AppBar position="sticky" color="inherit" elevation={0} sx={{ height: 100, boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <NavbarLeft />
                <NavbarCenter />
                <NavbarRight />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
