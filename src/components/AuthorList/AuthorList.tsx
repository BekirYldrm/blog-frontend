import { Grid2 } from "@mui/material"
import { useFetchDataWithEffect } from "../../hooks/useFetchDataWithEffect"
import { AuthorResDTO } from "../../types/types"
import Author from "./Author"
import SearchForm from "./SearchForm"

const AuthorList = () => {

    const url = `https://blog-backend-5uhs.onrender.com/authors`
    const { data: authorList } = useFetchDataWithEffect<AuthorResDTO[]>(url)

    return (
        <Grid2 container spacing={2} mt={2} justifyContent={'center'}>

            <Grid2 container size={{ xs: 12, sm: 12, md: 3, lg: 2.5 }} alignSelf='center' height={'min-content'} justifyContent={'center'} >
                <SearchForm />
            </Grid2>

            <Grid2 container size={{ xs: 12, md: 9, lg: 9.5 }}>
                {authorList?.map((author: AuthorResDTO, index) => (
                    <Author key={index} author={author} />
                ))}
            </Grid2>

        </Grid2>
    )
}

export default AuthorList