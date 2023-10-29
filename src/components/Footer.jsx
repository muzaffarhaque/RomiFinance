import React from 'react'
import logo from '../assets/images/Logo.png';
import { Image } from 'react-bootstrap';
const socilIcon=["https://zomi.finance/static/media/ic_twitter.9f35b403.svg",
"https://zomi.finance/static/media/ic_medium.f6051b2e.svg",
'https://zomi.finance/static/media/ic_github.dbd4de8a.svg',
'https://zomi.finance/static/media/ic_telegram.af1a4a66.svg',
'https://zomi.finance/static/media/ic_discord.be4d716c.svg',
]
export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="logo-frame d-flex align-items-center justify-content-center">
            <Image src={logo} className="desk-logo" alt="logo"/>
            Romi.Finance
          </div>
          <div className="d-flex align-items-center my-4 justify-content-center gap-4">
           {socilIcon?.map((item,i)=>{
            return(
              <Image src={item} alt="icon" className="social-icon"/>
            )
           })
           } 
          </div>
          <div className="d-flex align-items-center flex-wrap  justify-content-center gap-4">
            <samp className='fx-14 fw-normal text-white'>Terms and conditions</samp>
            <samp className='fx-14 fw-normal text-white'>Referral Teams</samp>
            <samp className='fx-14 fw-normal text-white'>Media Kit</samp>
         </div>
      </div>
    </footer>
  );
}
