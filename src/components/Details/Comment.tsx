import { Avatar, Grid2, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFetchDataWithEffect } from "../../hooks/useFetchDataWithEffect";
import { CommentType, UserCommentDTO } from "../../types/types";

const Comment = ({ comment }: { comment: CommentType }) => {

    const url = `https://blog-backend-5uhs.onrender.com/users/comment/${comment.id}`
    const { data: user } = useFetchDataWithEffect<UserCommentDTO>(url)
    const username = user?.username;
    const image = user?.image;

    return (
        <Grid2 size={{ xs: 10, sm: 6, md: 5, lg: 12 }} border={1} borderColor={'gray'} borderRadius={3} p={2}>
            <Box>
                <Box
                    display="flex"
                    alignItems="center"
                    mb={1}
                >
                    <Avatar
                        alt="user profile" src={image}
                        sx={{
                            width: { xs: 30, lg: 50 },
                            height: { xs: 30, lg: 50 },
                            mr: 2, backgroundColor: "primary.main"
                        }}
                    />

                    <Typography
                        fontSize={{ xs: 15, sm: 17, md: 19, lg: 21 }}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        alignSelf={'baseline'}
                        variant="h6"
                    >
                        {username}
                    </Typography>

                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    mb={1}
                >
                    <Rating
                        size="small"
                        value={comment.rating}
                        readOnly sx={{ color: "gold" }}
                        precision={0.5}
                    />
                </Box>

                <Typography
                    fontSize={{ xs: 13, sm: 14, md: 16, lg: 18 }}
                    variant="body1"
                    color="text.primary"
                >
                    {comment.comment}
                </Typography>

            </Box>
        </Grid2>

    );
}

export default Comment