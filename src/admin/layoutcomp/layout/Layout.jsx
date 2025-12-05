import './Layout'
import Sidebar from '../../common/sidebar/Sidebar'
import Home from '../../pages/home/Home'

const Layout = () => {
  return (
    <div className='layoutContainer'>
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Layout