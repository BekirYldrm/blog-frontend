import { Box, IconButton, Tooltip } from "@mui/material"

const NavbarCenter = () => {

    return (
        <Box display='flex' justifyContent='center' flex={1}>

            <Tooltip title='Home Page' arrow>
                <IconButton href="/"
                    sx={{
                        cursor: 'pointer', overflow: 'hidden',
                        '&:hover img': {
                            transform: 'rotate(360deg)', transition: 'transform 1s ease-in-out',
                        }
                    }}
                >
                    <Box src="/logo.png" alt="logo" component='img'
                        width={{ xs: 30, sm: 40, md: 50, lg: 60 }}
                        height={{ xs: 30, sm: 40, md: 50, lg: 60 }}
                    />
                </IconButton>
            </Tooltip>
        </Box>


    )
}

export default NavbarCenter