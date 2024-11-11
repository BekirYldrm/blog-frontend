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
                        width={{ xs: 20, sm: 30, md: 40, lg: 50 }}
                        height={{ xs: 20, sm: 30, md: 40, lg: 50 }}
                    />
                </IconButton>
            </Tooltip>
        </Box>


    )
}

export default NavbarCenter