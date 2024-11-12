import { Typography } from "@mui/material"

const Text = () => {
    return (
        <Typography
            fontFamily='roboto'
            variant='body1'
            fontSize={20}
            letterSpacing={0.8}
            lineHeight={1.6}
            color='textSecondary'

        >
            Farklı konularda yazılar yazan yetenekli yazarlarımızın ve her yaştan,
            her kesimden okuyucunun bir araya geldiği dinamik bir platform.
            Amacımız, sizlere ilham vermek, güncel ve ilgi çekici içerikler sunarak bilgi
            ve eğlenceyi bir araya getirmek. Keyifli okumalar ve katkılarınız için şimdiden teşekkür ederiz!
        </Typography>
    )
}

export default Text