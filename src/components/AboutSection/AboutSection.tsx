import { Button } from '@mui/material'
import ShopIcon from '@mui/icons-material/Shop'
import AppleIcon from '@mui/icons-material/Apple'
import styles from '/src/styles/AboutSection.module.css'

const AboutSection = () => {
  return (
    <section id='about'>
      <div className={styles.container}>
        <div>
          <p>
            Farklı konularda yazılar yazan yetenekli yazarlarımızın ve her yaştan,
            her kesimden okuyucunun bir araya geldiği dinamik bir platform.
            Amacımız, sizlere ilham vermek, güncel ve ilgi çekici içerikler sunarak bilgi
            ve eğlenceyi bir araya getirmek. Keyifli okumalar ve katkılarınız için şimdiden teşekkür ederiz!
          </p>
        </div>
        <img src="/about.png" alt="about" width='55%'  />
        <div className={styles.rightDiv}>
          <h1>229</h1>
          <p>Toplam Kullanıcı Sayısı</p>
          <div>
            <Button variant="contained" >
              <ShopIcon sx={{ mx: 1 }} />
              <p>Google Play</p>
            </Button>
            <Button variant="contained" >
              <AppleIcon sx={{ mx: 1 }} />
              <p>App Store</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection