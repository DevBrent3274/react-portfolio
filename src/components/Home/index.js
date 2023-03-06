
import { Link } from 'react-router-dom';


import './index.scss';

const Home = () => {


  return (
    <>
      <div className="container home-page">
        <div className="text-area">
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