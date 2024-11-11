import { AppBar, Toolbar } from '@mui/material';
import NavbarCenter from './NavbarCenter';
import NavbarLeft from './NavbarLeft';
import NavbarMenu from './NavbarMenu';
import NavbarRight from './NavbarRight';

const Navbar = () => {

    return (
        <AppBar position="sticky" color="inherit" elevation={0}
            sx={{
                height: { xs: '50px', sm: '65px', md: '80px', lg: '95px' },
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <NavbarMenu />
                <NavbarLeft />
                <NavbarCenter />
                <NavbarRight />
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;