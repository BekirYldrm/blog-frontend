import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import { Button, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const About = () => {

  return (

    <section id='about'>

      <Grid container mb={10} spacing={2}>

        <Grid size={{ xs: 12, md: 4, lg: 3 }} justifyContent='center' alignContent='center' p={2} >
          <Typography fontFamily='roboto' variant='h6'>
            Farklı konularda yazılar yazan yetenekli yazarlarımızın ve her yaştan,
            her kesimden okuyucunun bir araya geldiği dinamik bir platform.
            Amacımız, sizlere ilham vermek, güncel ve ilgi çekici içerikler sunarak bilgi
            ve eğlenceyi bir araya getirmek. Keyifli okumalar ve katkılarınız için şimdiden teşekkür ederiz!
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 8, lg: 7 }} alignContent='center'>
          <Box component='img' src='/about.png' alt="about" width={'100%'} />
        </Grid>

        <Grid container size={{ xs: 12, lg: 2 }} justifyContent={'center'} alignContent='center' textAlign='center'>

          <Grid size={{ md: 4, lg: 12 }}>
            <Typography variant='h3' m={1}>229</Typography>
            <Typography variant='subtitle1' m={1}> Toplam Kullanıcı Sayısı</Typography>
          </Grid>

          <Grid container size={{ md: 4, lg: 12 }} spacing={2} p={1} justifyContent={'center'} alignContent={'center'}>
            <Tooltip arrow title='Google Play'>
              <Button color='inherit'
                sx={{
                  borderRadius: 5,
                  '&:hover': {
                    backgroundColor: 'black', transition: ' 0.6s ease-in-out', color: 'white'
                  }
                }}
              ><ShopIcon sx={{ fontSize: { xs: 30, sm: 40, md: 50, lg: 60 } }} />
              </Button>
            </Tooltip>


            <Tooltip arrow title='App Store'>
              <Button color='inherit'
                sx={{
                  borderRadius: 5,
                  '&:hover': {
                    backgroundColor: 'black', transition: ' 0.6s ease-in-out', color: 'white'
                  }
                }}
              ><AppleIcon sx={{ fontSize: { xs: 30, sm: 40, md: 50, lg: 60 } }} />
              </Button>
            </Tooltip>

          </Grid>
        </Grid>
      </Grid>

    </section>
  )
}
export default About