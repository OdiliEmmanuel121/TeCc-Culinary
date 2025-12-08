import './Sidebar.css'
import logoImage from '../../../assets/logo-image.png'
import { Link } from 'react-router-dom'
import Data from '../sidebar/data/Data'
import { useState } from 'react'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state (used by the hamburger button)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // 💡 NEW: Function to explicitly close the state (used by backdrop and links)
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button for Mobile View */}
            <button className='bar' onClick={toggleSidebar}>
                ☰
            </button>

            {/* 💡 NEW: Sidebar Overlay/Backdrop */}
            {/* This only renders when the sidebar is open, and clicking it closes the sidebar */}
            {isOpen && (
                <div
                    className='SidebarOverlay'
                    onClick={closeSidebar} // <-- This closes the sidebar when main page is clicked
                />
            )}

            {/* Sidebar Container: Class 'open' is conditional */}
            <div className={`SidebarContainer ${isOpen ? 'open' : ''}`}>
                <img src={logoImage} alt="logoImage" className='PICTURELOGO' />

                {/* Optional: Close button inside the sidebar (changed to closeSidebar) */}
                <button className='close-btn' onClick={closeSidebar}>
                    &times;
                </button>

                {Data.map((item) => {
                    return (
                        <div key={item.id} className='InnerElement'>
                            <div className='sidebar'>
                                {/* Use closeSidebar to ensure the menu closes when navigating */}
                                <Link to={item.path} className='new' onClick={closeSidebar}>
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