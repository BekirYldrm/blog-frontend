import { Button, Grid2, TextField } from "@mui/material";
import { ProfileImageProps } from "../../types/types";


const ProfileImage = ({ image, imageChanged, handleImageChange, handleSaveImage }: ProfileImageProps) => {
    return (
        <>
            <Grid2
                size={{ xs: 10, sm: 8 }}
                component={TextField}
                fullWidth
                label="image"
                name="image"
                variant="outlined"
                required
                value={image}
                onChange={handleImageChange}
            />
            <Grid2
                component={Button}
                size={{ xs: 6, sm: 5, md: 4 }}
                variant="contained"
                color="primary"
                onClick={handleSaveImage}
                disabled={!imageChanged}
                p={0}
            >
                Save Change
            </Grid2>
        </>
    );
};

export default ProfileImage
