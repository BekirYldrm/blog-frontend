import { IconButton } from "@mui/material"

const NavbarCenter = () => {

    return (
        <IconButton href="/" sx={{
            height: 80, width: 80, cursor: 'pointer', overflow: 'hidden',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            '&:hover img': {
                transform: 'rotate(360deg)', transition: 'transform 1s ease-in-out',
            },
        }} >
            <img
                src="/public/logo.png" alt="logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </IconButton>
    )
}

export default NavbarCenter