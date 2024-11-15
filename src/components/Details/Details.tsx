import { Grid2 } from "@mui/material"
import Author from "./Author"
import CommentForm from "./CommentForm"
import ReadingArea from "./ReadingArea"

const Details = () => {
    return (
        <Grid2 container spacing={{ xs: 5, lg: 2 }} my={3} >

            <Grid2
                container
                size={2.5}
                display={{ xs: 'none', lg: 'flex' }}
                justifyContent={'center'}
                height={'min-content'}
                position={'sticky'}
                top={'20vh'} zIndex={10}
            >
                <Author />
                <CommentForm />
            </Grid2>

            <Grid2
                container
                size={{ xs: 12, lg: 9.5 }}
                justifyContent={'center'}
                spacing={2}>
                <ReadingArea />
            </Grid2>

            <Grid2
                container
                justifyContent={'center'}
                display={{ xs: 'flex', lg: 'none' }}
                size={12}
            >
                <CommentForm />
            </Grid2>

        </Grid2>
    )
}

export default Details