import { Apple, Shop } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
const DownloadButton = ({ title }: { title: string }) => {



    return (
        <Tooltip arrow title={title}>
            <Button
                sx={{
                    backgroundColor: title == 'Google Play' ? '#d9534f' : '#4285F4',
                    color: '#ffffff',
                    borderRadius: 5,
                    mx: 1,
                    '&:hover': {
                        backgroundColor: 'black',
                        transform: 'scale(1.05)',
                        transition: ' 0.6s ease-in-out'
                    }
                }}
            >
                {title == 'Google Play' ?
                    <Shop sx={{ fontSize: { xs: 30, sm: 40, md: 50, lg: 60 }, '&:hover': { transform: 'scale(1.1)' } }} />
                    :
                    <Apple sx={{ fontSize: { xs: 30, sm: 40, md: 50, lg: 60 }, '&:hover': { transform: 'scale(1.1)' } }} />
                }
            </Button>
        </Tooltip >
    )
}

export default DownloadButton