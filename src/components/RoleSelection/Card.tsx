import { Avatar, Button, Grid2, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Card = ({ role, operation }: { role: string, operation: string }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        if (role == 'User' && operation == 'sign up') {
            navigate('/user/signup')
        }
        else if (role == 'Author' && operation == 'sign up') {
            navigate('/author/signup')
        }
        else if (role == 'User' && operation == 'login') {
            navigate('/user/login')
        }
        if (role == 'Author' && operation == 'login') {
            navigate('/author/login')
        }
    }

    return (
        <Grid2
            container
            justifyContent='center'
            size={{ xs: 9, sm: 6, md: 4, lg: 3 }}
            border={1}
            borderColor='#ccc'
            borderRadius={1}
            textAlign='center'
            p={5}
            spacing={2}
        >
            <Grid2
                component={Avatar}
                width={150}
                height={150}
                sx={{ bgcolor: '#eee' }}
            />
            <Grid2
                fontWeight='bold'
                color='blue'
                fontFamily="cursive"
                size={12}
                fontSize={30}
                component={Typography}
                textTransform='capitalize'
                variant="h6"
                my={1}
            >
                {role}
            </Grid2>
            <Grid2
                size={12}
                width='auto'
                component={Button}
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                {operation}
            </Grid2>
        </Grid2>
    )
}

export default Card