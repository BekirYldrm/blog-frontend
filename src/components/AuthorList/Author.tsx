import { Avatar, Grid2, Typography } from '@mui/material'
import { AuthorResDTO } from '../../types/types'
import { useNavigate } from 'react-router-dom'

const Author = ({ author }: { author: AuthorResDTO }) => {

    const navigate = useNavigate()

    return (
        <Grid2 container size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} justifyContent={'center'} spacing={2}>


            <Grid2 size={12} width={'min-content'} component={Avatar} alt="author profile" src={author.image} onClick={() => navigate(`/author/${author.id}`)}
                sx={{
                    width: { xs: 90, sm: 110, md: 130, lg: 150 }, height: { xs: 90, sm: 110, md: 130, lg: 150 },
                    boxShadow: 3, border: 2, borderColor: 'red',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'scale(1.1)', boxShadow: 6 }
                }}
            />

            <Grid2
                size={12} textAlign={'center'} fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}
                fontWeight='bold' color='text.primary' variant='h6' component={Typography}
            >
                {author.firstName} {author.lastName}
            </Grid2>

        </Grid2>

    )
}

export default Author