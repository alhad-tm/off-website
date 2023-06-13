import React from "react";
import Logo from "../../assets/Icon & Logo/Logo.svg";
import css from "./Footer.module.css";
// import Arrow from "../../assets/Icon & Logo/Arrow.svg"
import Location from "../../assets/Icon & Logo/Frame-2.svg";
import Phone from "../../assets/Icon & Logo/Frame-1.svg";
import Mail from "../../assets/Icon & Logo/Frame.svg";
import Twitter from "../../assets/Icon & Logo/Twitter.svg";
import Lk from "../../assets/Icon & Logo/linkedin2.svg";
import Insta from "../../assets/Icon & Logo/instagram logo.svg";
import { Link,NavLink } from "react-router-dom";
import {Link as LinkRoll } from "react-scroll";
import Backto from "../../assets/backtotop.svg";


const Footer = () => {
 
  return (
    <div className={css.maincontainer} >
      <div className={css.container} >
        <div className={css.footerlogo}>
          <img src={Logo} alt="" />
        </div>

        <div className={css.fdetails}>
          <div className={css.fdone}>
            <div className={css.fdonedescr}>
              {" "}
              Invicious is committed to creating innovative solutions that
              redefine the digital landscape.Join us on our mission to make a
              positive impact and build a brighter tomorrow.
            </div>
            <div className={css.footericons}>
           <a href="https://twitter.com/Invicious_in?s=08">  <img src={Twitter} alt="" />    </a>   
           <a href="https://www.linkedin.com/company/invicious">  <img src={Lk} alt="" /> </a>  
            <a href="https://instagram.com/invicious.in?igshid=MzRlODBiNWFlZA==">  <img src={Insta} alt="" /></a> 
            </div>
          </div>
          {/* <div className={css.fproimp}> */}
            <div className={css.fdtwo}>
              <h3 style={{ color: "white" }}>Products</h3>
              <div className={css.fdspan}>
                <NavLink to="/tributorE">
                  {" "}
                  <span className={css.tc} onClick={() => window.scrollTo(0, 0)}>Tributor for Cinema</span>
                </NavLink>
                <NavLink to="/tributorCM">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}>Tributor for Media</span>
                </NavLink>
                <NavLink to="/prekets">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}>Prekets.com</span>
                </NavLink> 
              </div>
            </div>

            <div className={css.fdthree}>
              <h3 style={{ color: "white" }}>Important Links</h3>
              <div className={css.fdspan}>

              
              <NavLink to="/about">
                  {" "}
                  <span  onClick={() => window.scrollTo(0, 0)}>Organisation Team</span>{" "}
                </NavLink>{" "}
             


                 {/* <span> Orginasation Team </span>   */}
                <span>Our partners</span>

                <NavLink to="/cookie">  <span onClick={() => window.scrollTo(0, 0)}>Cookies Policy</span>
                </NavLink>{" "}
               


                <NavLink to="/career">
                  {" "}
                  <span onClick={() => window.scrollTo(0, 0)}  >Career</span>{" "}
                </NavLink>{" "}
              </div>
            </div>
          {/* </div> */}

          <div className={css.fdfour}>
            <h3 style={{ color: "white"  }}>Contact info</h3> 
            <div className={css.foot}>
              {" "}
              <img src={Location} alt="" />
              <span className={css.floc}>
                124-H, 3rd Floor, Thendral Complex,DB Road, RS Puram, Coimbatore
                - 641002
              </span>
            </div>{" "}
            <br />
            <div className={css.foot}>
              <img src={Phone} alt="" />
              <span>+91 7550315660</span>
            </div>{" "}
            <br />
            <div className={css.foot}>
              <img src={Mail} alt="" />
        <a href="mailto: contact@invicious.in"> <span >contact@invicious.in</span> </a>      
            </div>
          </div>
      
         
         
        </div>
      </div>

      <br />

      <div className={css.footerlist}>
        <div className={css.flistleft}>
          <NavLink to="/">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Home</li>
          </NavLink>

          <NavLink to="/about" >
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>About</li>
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Contact</li>
          </NavLink>
          
          <NavLink to="/privacy">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Privacy Policy</li>
          </NavLink>
          <NavLink to="/terms">
            {" "}
            <li onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</li>
          </NavLink>
        </div>

        <div className={css.flistright}>
          <span>Copyright © 2023 Invicious</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
