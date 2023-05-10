import React from 'react'
import Logo from "../../assets/Icon & Logo/Logo.svg"
import css from "./Footer.module.css"
// import Arrow from "../../assets/Icon & Logo/Arrow.svg"
import Location from "../../assets/Icon & Logo/Frame.svg"
import Phone from "../../assets/Icon & Logo/Frame-1.svg"
import Mail from "../../assets/Icon & Logo/Frame-2.svg"
import Twitter from "../../assets/Icon & Logo/Twitter.svg"
import Fb from "../../assets/Icon & Logo/Facebook logo.svg"
import Insta from "../../assets/Icon & Logo/instagram logo.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={css.maincontainer}>
    <div className={css.container}>
        <div className={css.footerlogo}>
            <img src={Logo} alt="" />
        </div>

        <div className={css.fdetails}>
            <div className={css.fdone}>
                <div className={css.fdonedescr}>    Invicious is committed to creating innovative solutions that redefine the digital landscape.Join us on our mission to make a positive impact and build a brighter tomorrow.</div> 
                <div className={css.footericons}>
                    <img src={Twitter} alt="" />
                    <img src={Fb} alt="" />
                    <img src={Insta} alt="" />
                </div>
             
</div>

            <div className={css.fdtwo}> 
            <h3>Products</h3>
            <div className={css.fdspan}>
            <span>Tributor E</span>
            <span>Tributor CM</span>
            <span>Prekets.com</span>
            </div>

            </div>

            <div className={css.fdthree}>
            <h3>Important Links</h3>
            <div className={css.fdspan}>
            <span>Organisation team</span>
            <span>Our partners</span>
            <span>Cookies Policy</span>
            <span>Careers</span> </div> 
            </div>


            <div className={css.fdfour}>
                <h3>Contac info</h3>

                <div className={css.foot}>         <img src={Location} alt="" />
                <span>124-H, 3rd Floor, Thendral Complex,DB Road, RS Puram, Coimbatore - 641002</span>  </div>
         
                <div className={css.foot}>
                <img src={Phone} alt="" />
                <span>+91 7550315660</span>
                </div>

                <div className={css.foot}>
                    <img src={Mail} alt="" />
                    <span>contact@inivicious.in</span>
                </div>  

            </div>

        </div>
      
    </div>
 <hr />
 
    <div className={css.footerlist}>
        <div className={css.flistleft}>
            <Link to="/"> <li onClick={() => window.scrollTo(0, 0)} >Home</li></Link>
           
            <Link to="/about"> <li  onClick={() => window.scrollTo(0, 0)}>About</li></Link>
            <Link to="/contact"> <li onClick={() => window.scrollTo(0, 0)}>Contact</li></Link>
            <li>Privacy policy</li>
            <li>Terms and Conditions</li>
        </div>



        <div className={css.flisright}>
            <span>Copyright © 2023 Invicious</span>
        </div>

    </div> 
    

    </div>

   
  
  )
}

export default Footer
