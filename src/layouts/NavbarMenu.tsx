import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarMenuProps {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
    anchorElNav: HTMLElement | null
    handleCloseNavMenu: () => void
}

const NavbarMenu = ({ handleOpenNavMenu, anchorElNav, handleCloseNavMenu }: NavbarMenuProps) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title='Menu' arrow>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{
                        width: { xs: '20px', sm: '30px' },
                        height: { xs: '20px', sm: '30px' }
                    }}
                >
                    <MenuIcon
                        sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            '&:hover': {
                                color: 'red'
                            },
                        }}
                    />
                </IconButton>
            </Tooltip>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem key="ABOUT" onClick={handleCloseNavMenu}>
                    <Typography component={HashLink} to="/#about"
                        sx={{ textDecoration: 'none', color: '#535353' }}

                    > ABOUT </Typography>
                </MenuItem>
                <MenuItem key="BLOGS" onClick={handleCloseNavMenu}>
                    <Typography component={HashLink} to="/#blogs"
                        sx={{ textDecoration: 'none', color: '#535353' }}
                    > BLOGS </Typography>
                </MenuItem>
                <MenuItem key="AUTHORS" onClick={handleCloseNavMenu}>
                    <Typography component="a" onClick={() => navigate(`/authors`)}
                        sx={{ color: '#535353' }}
                    > AUTHORS </Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default NavbarMenu