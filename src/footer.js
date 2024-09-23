import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa, fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
import { SocialIcon } from 'react-social-icons'

const Footer = ()=>{
    return(
        <div>
            <footer id="footer" >
                <span style={{display:"flex"}}>
                <h3>Contact:</h3>
      <h3>012-345-6789</h3>

                </span>
                <span style={{display:"flex"}}>
                <h3>Address:</h3>
      <h3>123 Bowie, MD</h3>

                </span>
                <span style={{display:"flex"}}>
                <h3>Email:</h3>
      <h3>email@gmail.com</h3>

                </span>
   
      <h4></h4>
      {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      <span>
        <SocialIcon url="www.instagram.com" />
      <SocialIcon url="www.facebook.com" />
      <SocialIcon url="www.tiktok.com" />
      <SocialIcon url="youtube.com" /></span>
 




     </footer> 

    </div>
    )
}
export default Footer;