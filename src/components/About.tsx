import React from 'react'
import "../styles/about.css"
import { Button } from '@mui/material'
import ShopIcon from '@mui/icons-material/Shop'
import AppleIcon from '@mui/icons-material/Apple';

const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className='left-div'>
          <h1>About</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quae, quia, voluptate quod voluptatem quibusdam
            consequuntur voluptatum quos qui quae. Quisquam voluptates, quae,
            quia, voluptate quod voluptatem quibusdam consequuntur voluptatum quos
            qui quae.
          </p>
          <div className='footer' >
            <Button className='download-button' variant="contained" >
              <ShopIcon sx={{ mx: 1 }} />
              <p>Google Play</p>
            </Button>
            <Button className='download-button' variant="contained" >
              <AppleIcon sx={{ mx: 1 }} />
              <p>App Store</p>
            </Button>
          </div>

        </div>

        <img className='about-image' src="/src/assets/about.png" alt="about" />

        <div className='right-div'>
          <h1>229</h1>
          <p>Toplam Kullanıcı Sayısı</p>
        </div>
      </div>
    </section>
  )
}

export default About