import React from 'react'
import { Link } from 'react-router-dom';

import profilePic from './brent-johnson.jpg'
import './index.scss';

const Home = () => {


  return (
    <>
      <div className="container home-page">
        <div className="text-area">
        <img src={profilePic}
            style={{left:"%", float:"right", margin:"10px", width:"320px", height:"320px", border:"none", borderRadius:"50%"}}
            alt="myPic"
  title="Brent Johnson Photo" />


          <h1>Hi, <br /> I'm Brent
          <br/>
          Fullstack Web Developer </h1>
          {/* Link is used to link an internal path instead of a href="" 
          I will add to other components as If I need this functionality 
          on other pages*/}
          <Link to="/contact" className="submit-button">
            CONTACT ME
          </Link>
        </div>
     
      </div>

     
    </>
  )
}

export default Home