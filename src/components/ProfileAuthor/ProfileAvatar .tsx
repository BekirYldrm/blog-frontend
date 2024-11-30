import { Avatar } from "@mui/material";
import { ProfileAvatarProps } from "../../types/types";

const ProfileAvatar = ({ author }: ProfileAvatarProps) => {
    return (

        <Avatar
            src={author?.image}
            sx={{
                width: { xs: 100, sm: 150, md: 200, lg: 300 },
                height: { xs: 100, sm: 150, md: 200, lg: 300 },
            }}
        />

    );
};

export default ProfileAvatar;
