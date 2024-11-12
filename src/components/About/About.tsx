import Grid from '@mui/material/Grid2';
import DownloadButton from './DownloadButton';
import Text from './Text'

const About = () => {

  return (

    <section id='about' style={{ padding: '0px 16px 16px', margin: '32px 0px' }}>

      <Grid container spacing={2}>

        <Grid container size={{ xs: 12, lg: 3 }} p={2}
          justifyContent='center' alignContent='center'
          sx={{ bgcolor: 'whitesmoke', borderRadius: 2, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
        >

          <Grid container size={{ xs: 12, sm: 10, md: 8, lg: 12 }} p={2}>
            <Text />
          </Grid>

          <Grid container py={{ xs: 2, sm: 0 }} size={{ xs: 12, sm: 2, md: 4, lg: 12 }}
            justifyContent={'center'} alignContent={'center'}
          >
            <DownloadButton title='Google Play' />
            <DownloadButton title='App Store' />
          </Grid>

        </Grid>

        <Grid
          component='img'
          src='/about.png'
          alt="about"
          size={{ md: 12, lg: 9 }}
          sx={{
            borderRadius: 3, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease-in-out',
            '&:hover': { transform: 'scale(1.02)' }
          }}
        />

      </Grid>

    </section>
  )
}
export default About