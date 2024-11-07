import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material"
import { Box, Button, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NavbarRight = () => {
    const navigate = useNavigate()
    return (

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
                <Button color="primary" variant="outlined" sx={{ mx: 1, fontSize: '1rem' }} onClick={() => navigate(`/login`)}>
                    Login
                </Button>
                <Button color="primary" variant="contained" sx={{ mx: 1, fontSize: '1rem' }} onClick={() => navigate(`/signup`)}>
                    Sign Up
                </Button>
            </Box>


        </Box>
    )
}

export default NavbarRight