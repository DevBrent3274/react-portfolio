import './App.scss';
import { Route, Routes } from 'react-router-dom'
// Using Routes functionality we can now lay our routes with Route one at a time

import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <Routes>
       {/*Routes gives use the functionality from react-router-dom
       to use mutiple routes. Then we can use mutiple nested routes 
       inside the Layout route path that will inherit and add to the / parent route */}
       <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
        
    </Routes>
    
    </>
  )
}

export default App
