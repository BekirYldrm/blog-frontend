import { Button, Grid2, Rating, TextField } from "@mui/material";
import { useState } from "react";

const CommentForm = () => {
    const [rating, setRating] = useState<number | null>(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Rating:", rating, "Comment:", comment);
    };

    return (
        <Grid2
            size={{ xs: 11, sm: 8, lg: 11 }}
            component="form" textAlign='center'
            height={'min-content'} p={2} boxShadow={3} borderRadius={2}
            onSubmit={handleSubmit}
        >
            <Rating
                name="rating" value={rating} onChange={(e, newValue) => setRating(newValue)}
                precision={0.5} sx={{ mb: 2 }}
            />

            <TextField
                label="Yorumunuz" multiline rows={3} fullWidth
                variant="outlined" value={comment} sx={{ mb: 2 }}
                onChange={(e) => setComment(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary">
                Gönder
            </Button>
        </Grid2 >
    );
};

export default CommentForm;
