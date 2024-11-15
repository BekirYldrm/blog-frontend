import { Avatar, Grid2, Tooltip } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useFetchDataWithEffect } from '../../hooks/useFetchDataWithEffect'
import { AuthorResDTO } from '../../types/types'

const Author = () => {

    const { id } = useParams()
    const url = `https://blog-backend-5uhs.onrender.com/authors/blog/${id}`
    const { data: author } = useFetchDataWithEffect<AuthorResDTO>(url)

    return (
        <Grid2 container display={{ xs: 'flex' }} flexDirection={{ xs: 'row', lg: 'column' }} mb={3} spacing={2} alignItems={'center'}>
            <Tooltip title={author?.firstName + " " + author?.lastName} arrow>
                <Avatar alt="author profile" src={author?.image}
                    sx={{
                        width: { xs: 50, sm: 60, md: 70, lg: 150 }, height: { xs: 50, sm: 60, md: 70, lg: 150 },
                        boxShadow: 3, border: 2, borderColor: 'primary.main',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': { transform: 'scale(1.1)', boxShadow: 6 }
                    }}
                />
            </Tooltip>
        </Grid2 >
    )
}

export default Author