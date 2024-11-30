import { Button, Grid2, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ProfilePasswordProps {
    password: string
    passwordChanged: boolean
    handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSavePassword: (e: React.FormEvent) => void
}

const ProfilePassword = ({ password, passwordChanged, handlePasswordChange, handleSavePassword }: ProfilePasswordProps) => {
    return (
        <>
            <Grid2
                size={{ xs: 10, sm: 8 }}
                component={TextField}
                fullWidth
                label="password"
                name="password"
                variant="outlined"
                required
                value={password}
                onChange={handlePasswordChange}
            />

            <Grid2
                component={Button}
                size={{ xs: 6, sm: 5, md: 4 }}
                variant="contained"
                color="primary"
                onClick={handleSavePassword}
                disabled={!passwordChanged}
                p={0}
            >
                Save Change
            </Grid2>
        </>
    );
};

export default ProfilePassword;
