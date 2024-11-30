import { Button, Grid2, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ProfileEmailProps {
    email: string;
    emailChanged: boolean;
    handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSaveEmail: (e: React.FormEvent) => void;
}

const ProfileEmail = ({ email, emailChanged, handleEmailChange, handleSaveEmail }: ProfileEmailProps) => {
    return (
        <>
            <Grid2
                size={{ xs: 10, sm: 8 }}
                component={TextField}
                fullWidth
                label="email"
                name="email"
                variant="outlined"
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
            />
            <Grid2
                component={Button}
                size={{ xs: 6, sm: 5, md: 4 }}
                variant="contained"
                color="primary"
                onClick={handleSaveEmail}
                disabled={!emailChanged}
                p={0}
            >
                Save Change
            </Grid2>
        </>
    );
};

export default ProfileEmail
