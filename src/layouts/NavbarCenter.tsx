import { IconButton, Tooltip } from "@mui/material"

const NavbarCenter = () => {

    return (
        <Tooltip title='Home Page' arrow>
            <IconButton href="/" sx={{
                width: { xs: '40px', sm: '55px', md: '70px', lg: '85px' },
                height: { xs: '40px', sm: '55px', md: '70px', lg: '85px' },
                cursor: 'pointer', overflow: 'hidden',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                '&:hover img': {
                    transform: 'rotate(360deg)', transition: 'transform 1s ease-in-out',
                },
            }} >
                <img
                    src="/logo.png" alt="logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </IconButton>
        </Tooltip>

    )
}

export default NavbarCenter