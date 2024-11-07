import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const NavbarLeft = () => {
    const navigate = useNavigate();

    const navigateToSection = (href: string) => {

        navigate(`/`);
        window.location.href = href;
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component={HashLink} to="/#about"
                sx={{
                    fontWeight: 'bold', mx: 1, textDecoration: 'none',
                    color: '#535353', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer'
                }}
            > ABOUT </Typography>
            <Typography variant="h5" component={HashLink} to="/#blogs"
                sx={{
                    fontWeight: 'bold', textDecoration: 'none', color: '#535353',
                    p: '6px 16px', borderRadius: '4px', cursor: 'pointer', mx: 1
                }}
            > BLOGS </Typography>
            <Typography variant="h5" component="a" onClick={() => navigate(`/authors`)}
                sx={{
                    fontWeight: 'bold', textDecoration: 'none', color: '#535353',
                    p: '6px 16px', borderRadius: '4px', cursor: 'pointer', mx: 1
                }}
            > AUTHORS </Typography>
        </Box>
    )
}

export default NavbarLeft