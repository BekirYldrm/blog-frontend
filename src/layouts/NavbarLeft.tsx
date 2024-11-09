import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const NavbarLeft = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ alignItems: "center", display: { xs: 'none', md: 'flex' } }}>
            <Typography component={HashLink} to="/#about"
                sx={{
                    fontWeight: 'bold', textDecoration: 'none', color: '#535353', cursor: 'pointer',
                    p: { md: '6px', lg: '8px' },
                    mx: { md: '6px', lg: '8px' },
                    fontSize: { md: '1rem', lg: '1.5rem' },
                }}
            > ABOUT </Typography>
            <Typography component={HashLink} to="/#blogs"
                sx={{
                    fontWeight: 'bold', textDecoration: 'none', color: '#535353', cursor: 'pointer',
                    p: { md: '6px', lg: '8px' },
                    mx: { md: '6px', lg: '8px' },
                    fontSize: { md: '1rem', lg: '1.5rem' },
                }}
            > BLOGS </Typography>
            <Typography component="a" onClick={() => navigate(`/authors`)}
                sx={{
                    fontWeight: 'bold', textDecoration: 'none', color: '#535353', cursor: 'pointer',
                    p: { md: '6px', lg: '8px' },
                    mx: { md: '6px', lg: '8px' },
                    fontSize: { md: '1rem', lg: '1.5rem' },
                }}
            > AUTHORS </Typography>
        </Box>
    )
}

export default NavbarLeft