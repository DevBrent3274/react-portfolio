
import "./index.scss"
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((project, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img src={project.introPage} className="portfolio-image" alt="project" />
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
          <h1>Insert Portfolio here</h1> 
        </div>  
        <div>{renderPortfolio(portfolioData.portfolio)}</div>  
      </div>

    </>

  )


}

export default Portfolio