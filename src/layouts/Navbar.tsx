import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Twitter, Facebook, Instagram, Email } from '@mui/icons-material';

const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ height: 100 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5" component="a" href="/#about"
                        sx={{
                            fontWeight: 'bold', mx: 1, textDecoration: 'none',
                            color: '#535353', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer'
                        }}
                    > ABOUT </Typography>
                    <Typography variant="h5" component="a" href='/blogs'
                        sx={{
                            fontWeight: 'bold', textDecoration: 'none', color: '#535353',
                            p: '6px 16px', borderRadius: '4px', cursor: 'pointer', mx: 1
                        }}
                    > BLOGS </Typography>
                    <Typography variant="h5" component="a" href='/authors'
                        sx={{
                            fontWeight: 'bold', textDecoration: 'none', color: '#535353',
                            p: '6px 16px', borderRadius: '4px', cursor: 'pointer', mx: 1
                        }}
                    > AUTHORS </Typography>
                </Box>

                <Box component="img" src="/src/assets/logo.png" alt="logo" sx={{ height: 80, cursor: 'pointer' }} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mx: 8 }}>
                        <div>
                            <IconButton color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit">
                                <Facebook />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="inherit" >
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit">
                                <Email />
                            </IconButton>
                        </div>
                    </Box>
                    <Box>
                        <Button color="primary" variant="outlined" sx={{ mx: 1, fontSize: '1rem' }}>
                            Login
                        </Button>
                        <Button color="primary" variant="contained" sx={{ mx: 1, fontSize: '1rem' }}>
                            Sign Up
                        </Button>
                    </Box>


                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
