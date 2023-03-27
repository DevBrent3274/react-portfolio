// import weatherImage from '../../project/weather-app.png'
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import React from 'react';

import asteroids from "../../project/Asteroids.gif"
import weatherapp from "../../project/weather-app.png"
import musicapp from "../../project/shirt.png"
// import bikecommerce from "../../project/Biketastic.png"

const images = {
  asteroids, weatherapp, musicapp
}


const Portfolio = () => {

  return (
    <div className="container portfolio-page">
      <div className="page-title">
          <h1>Recent Projects</h1> 
      </div>
      <div className="images-container">
        { portfolioData.portfolio.map((project, idx) => (
          <div className="portfolio-item">
            <div className="image-box" key={idx}>
              <img src={images[project.introPage]} className="portfolio-image" alt="project" />
            </div>
            <div className="content">
              <p className="title">{project.title}</p>
              <h4 className="tech-stack">{project.tech}</h4>
              <button className="btn" onClick={() => window.open(project.link)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio