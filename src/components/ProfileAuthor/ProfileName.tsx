import { Grid2, TextField } from "@mui/material";
import { ProfileNameProps } from "../../types/types";



const ProfileName = ({ author }: ProfileNameProps) => {
    return (
        <>
            <Grid2
                size={{ xs: 10, sm: 8 }}
                component={TextField}
                fullWidth
                variant="outlined"
                value={author ? author.firstName : ""}
                disabled
            />
            <Grid2
                size={{ xs: 10, sm: 8 }}
                component={TextField}
                fullWidth
                variant="outlined"
                value={author ? author.lastName : ""}
                disabled
            />
        </>
    );
};

export default ProfileName;
