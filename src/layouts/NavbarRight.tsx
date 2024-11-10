import { AccountCircle } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
    const navigate = useNavigate();

    const [anchorUserEl, setAnchorUserEl] = useState<null | HTMLElement>(null)
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => setAnchorUserEl(event.currentTarget)
    const handleCloseUserMenu = () => setAnchorUserEl(null)

    return (
        <Box display='flex' flex={1} alignItems='center' justifyContent='flex-end'>
            <Box mx={1}>
                <Tooltip title='User Menu' arrow >
                    <IconButton onClick={handleOpenUserMenu}>
                        <AccountCircle sx={{ fontSize: { xs: 30, sm: 35, md: 40, lg: 45 } }} />
                    </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorUserEl} open={Boolean(anchorUserEl)} onClose={handleCloseUserMenu} >
                    <MenuItem onClick={() => {
                        handleCloseUserMenu()
                        navigate(`/login`)
                    }} >
                        <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>Login</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => {
                        handleCloseUserMenu()
                        navigate(`/signup`)
                    }} >
                        <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>Sign Up</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default NavbarRight;
