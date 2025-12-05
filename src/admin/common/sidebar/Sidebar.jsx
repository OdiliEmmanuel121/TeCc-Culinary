import './Sidebar.css'
import logoImage from '../../../assets/logo-image.png'
import { Link } from 'react-router-dom'
import Data from '../sidebar/data/Data'
import { useState } from 'react' // 1. Import useState

const Sidebar = () => {
    // 2. State to manage the sidebar's open/closed status
    const [isOpen, setIsOpen] = useState(false); 

    // 3. Function to toggle the state
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Button for Mobile View */}
            {/* The 'bar' div now serves as the button and displays the hamburger icon */}
            <button className='bar' onClick={toggleSidebar}>
                {/* Use a simple text character for the hamburger icon */}
                ☰
            </button> 

            {/* 4. Conditionally add the 'open' class based on the state */}
            <div className={`SidebarContainer ${isOpen ? 'open' : ''}`}>
                <img src={logoImage} alt="logoImage" className='PICTURELOGO' />
                
                {/* Optional: Add a close button (X) inside the sidebar for mobile */}
                <button className='close-btn' onClick={toggleSidebar}>
                    &times; {/* HTML entity for multiplication sign / Close X */}
                </button>
                
                {Data.map((item) => {
                    return (
                        <div key={item.id} className='InnerElement'>
                            <div className='sidebar'>
                                {/* Add onClick={toggleSidebar} to close the menu when a link is clicked */}
                                <Link to={item.path} className='new' onClick={toggleSidebar}>
                                    <img src={item.icon} alt="icon-image" />
                                    <div>{item.heading}</div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Sidebar
