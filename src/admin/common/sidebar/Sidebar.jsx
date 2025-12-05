import './Sidebar.css'
import logoImage from '../../../assets/logo-image.png'
import { Link } from 'react-router-dom'
import Data from '../sidebar/data/Data'



const Sidebar = () => {
    return (
        <div className='SidebarContainer'>
            <img src={logoImage} alt="logoImage" className='PICTURELOGO' />
            <div className='bar' style={{ display: 'none' }}>
                {/* <MenuIcon /> */}
            </div>
            {Data.map((item) => {
                return (
                    <div key={item.id} className='InnerElement'>
                        <div className='sidebar'>
                            <Link to={item.path} className='new'>
                                <img src={item.icon} alt="icon-image" />
                                <div>{item.heading}</div >
                            </Link>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}

export default Sidebar