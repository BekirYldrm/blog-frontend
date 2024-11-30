import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostData } from "../../hooks/usePostData";
import { AuthorType } from "../../types/types";

const AuthorForm = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { data, post } = usePostData<AuthorType>()

    useEffect(() => {
        if (data) {
            alert("Kayit Basarili Giris Sayfasina Yonlediriliyorsunuz ...")
            navigate('/author/login')
        }
    }, [data])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = '/authors'
        const body = { firstName, lastName, password, email }
        await post(url, body)
    };

    return (
        <Grid2 container justifyContent='center' mt={5}>
            <Grid2
                size={{ xs: 8.5, sm: 7, md: 5.5, lg: 4 }}
                container
                spacing={4}
                py={2}
                component="form"
                justifyContent='center'
                textAlign='center'
                boxShadow={3}
                borderRadius={2}
                onSubmit={handleSubmit}
            >
                <Grid2
                    size={8}
                    component={Typography}
                    fontSize={30}
                    fontFamily='cursive'
                    variant="h5"
                    fontWeight='bold'
                    color="blue"
                >
                    sign up
                </Grid2>

                <Grid2
                    size={8}
                    component={TextField}
                    fullWidth
                    label="first name"
                    name="firstName"
                    variant="outlined"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                />
                <Grid2
                    size={8}
                    component={TextField}
                    fullWidth
                    label="last name"
                    name="lastName"
                    variant="outlined"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                />

                <Grid2
                    size={8}
                    component={TextField}
                    fullWidth
                    label="email"
                    name="email"
                    variant="outlined"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <Grid2
                    size={8}
                    component={TextField}
                    fullWidth
                    label="password"
                    name="password"
                    variant="outlined"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <Grid2 size={8}>
                    <Button size="medium" type="submit" variant="contained" color="primary" >Sign Up</Button></Grid2>
            </Grid2 >
        </Grid2>
    )
}

export default AuthorForm