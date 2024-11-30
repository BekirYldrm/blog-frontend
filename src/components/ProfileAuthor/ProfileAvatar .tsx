import { Avatar } from "@mui/material";
import { AuthorType } from "../../types/types";

interface ProfileAvatarProps {
    author: AuthorType | null;
}

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
