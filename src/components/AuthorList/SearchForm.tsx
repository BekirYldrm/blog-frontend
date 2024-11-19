import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

const SearchForm = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(firstName + lastName);
    };

    return (
        <Grid2
            size={10}
            container
            spacing={2}
            p={2}
            component="form"
            justifyContent='center'
            alignItems='center'
            boxShadow={3}
            borderRadius={2}
            onSubmit={handleSubmit}
        >
            <Grid2
                component={Typography}
                display={{ xs: 'none', md: 'flex' }}
                variant="h5"
                fontWeight='bold'
                color="text.secondary"
            >Search</Grid2>

            <Grid2
                size={{ xs: 4.5, md: 12 }}
                component={TextField}
                fullWidth
                label="first name"
                name="firstName"
                variant="outlined"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />

            <Grid2
                size={{ xs: 4.5, md: 12 }}
                component={TextField}
                fullWidth
                label="last name"
                name="lastName"
                variant="outlined"
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            />

            <Grid2
                component={Button}
                size={{ xs: 3, md: 12 }}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
            >Search</Grid2>



        </Grid2 >
    )
}

export default SearchForm