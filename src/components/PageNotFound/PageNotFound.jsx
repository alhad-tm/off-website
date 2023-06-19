import React from 'react'
import css from "./PageNotFound.module.css"
// import Sad from "../../assets/sademoji.png"
import Error from "../../assets/error404.png"
const PageNotFound = () => {
  return (
    <div className={css.pg}>
        <img className={css.error} src={Error} alt="" />
      {/* <h1>404</h1>
      <h3>Page not found</h3> */}


      <a  href="/"><button className={css.btohome}>Back to home</button></a>
    </div>
  ) 
}

export default PageNotFound
