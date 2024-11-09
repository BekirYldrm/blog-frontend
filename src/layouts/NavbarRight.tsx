import { Email, Facebook, Instagram, Twitter, HeadsetMic } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarRight = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Menü açma ve kapatma fonksiyonları
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', mx: 1 }}>
                <Box>
                    <IconButton color="inherit">
                        <Twitter />
                    </IconButton>
                    <IconButton color="inherit">
                        <Facebook />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton color="inherit">
                        <Instagram />
                    </IconButton>
                    <IconButton color="inherit">
                        <Email />
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                <Tooltip title='Contact' arrow>
                    <IconButton color="inherit" onClick={handleOpenMenu}
                        sx={{
                            width: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                            height: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                        }}>
                        <HeadsetMic
                            sx={{
                                fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '30px' },
                                '&:hover': {
                                    color: 'purple'
                                },
                            }}
                        />
                    </IconButton>
                </Tooltip>


                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                    <MenuItem onClick={handleCloseMenu}>
                        <IconButton color="inherit"
                            sx={{ width: { xs: 24, sm: 30, md: 40 }, height: { xs: 24, sm: 30, md: 40 } }}
                        ><Twitter /></IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <IconButton color="inherit"
                            sx={{ width: { xs: 24, sm: 30, md: 40 }, height: { xs: 24, sm: 30, md: 40 } }}
                        ><Facebook /></IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <IconButton color="inherit"
                            sx={{ width: { xs: 24, sm: 30, md: 40 }, height: { xs: 24, sm: 30, md: 40 } }}
                        ><Instagram /></IconButton>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMenu}>
                        <IconButton color="inherit"
                            sx={{ width: { xs: 24, sm: 30, md: 40 }, height: { xs: 24, sm: 30, md: 40 } }}
                        ><Email /></IconButton>
                    </MenuItem>
                </Menu>
            </Box>

            <Box sx={{ ml: { xs: '2px', sm: '4px', md: '6px', lg: '8px' } }}>

                <Tooltip title='Login' arrow>
                    <IconButton
                        className="fas fa-sign-in-alt"
                        onClick={() => navigate(`/login`)}
                        sx={{
                            width: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                            height: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                            fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '30px' },
                            mx: { xs: '2px', sm: '4px', md: '6px', lg: '8px' },
                            '&:hover': {
                                color: 'blue'
                            },
                        }} />
                </Tooltip>

                <Tooltip title='Sign Up' arrow>
                    <IconButton
                        className="fa fa-user-plus"
                        onClick={() => navigate(`/signup`)}
                        sx={{
                            width: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                            height: { xs: '20px', sm: '30px', md: '40px', lg: '60px' },
                            fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '30px' },
                            mx: { xs: '2px', sm: '4px', md: '6px', lg: '8px' },
                            '&:hover': {
                                color: 'black'
                            },
                        }} />
                </Tooltip>

            </Box>
        </Box>
    );
};

export default NavbarRight;
