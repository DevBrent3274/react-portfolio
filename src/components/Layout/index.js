import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/'
import './index.scss'


const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className='page'>
      {/* Outlet is added for the functionality used to render the current route selected */}
      {<Outlet />}
      </div>
    </div>
)}

export default Layout
