
import "./index.scss"
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((project, idx) => {
            return (
              < div className="image-box" key={idx}>
                <img src={project.introPage} className="portfolio-image" alt="project" />
                
                <div className="content">
                  <p className="title">{project.title}</p>
                  <h4 className="tech-stack">{project.tech}</h4>
                  <button className="btn" onClick={() => window.open(project.link)}>View</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return(

    <>
      <div className="container portfolio-page">
        <div className="page-title">
          <h1>Recent Projects</h1> 
        </div>  
        <div>{renderPortfolio(portfolioData.portfolio)}</div>  
      </div>

    </>

  )


}

export default Portfolio