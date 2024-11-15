import { Grid2, Typography } from "@mui/material"
import { CommentType } from "../../types/types"
import Comment from "./Comment"

const Comments = ({ comments }: { comments: CommentType[] }) => {


    return (
        comments.length > 0 ?
            comments.map((comment: CommentType, index) => (
                <Comment key={index} comment={comment} />
            ))
            :
            <Typography variant="h6" color="text.secondary" textAlign="center" fontWeight="bold">
                <span style={{ marginRight: '8px' }}>🚫</span> Yorum Yok
            </Typography>
    )
}


export default Comments