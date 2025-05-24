import './Header.css'
import { Link } from 'react-router';
import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { useState } from 'react';
import { navLinks } from '../liberary/nav.js';
import Sidebar from './Sidebar.jsx';


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState('closed');
    // const [loggedIn, setLoggedIn] = useState(false); // Assuming user is logged in for demonstration
    // console.log(`Header component rendered with menu state: ${toggleMenu}`);
    return (
        <>
         {/* <Sidebar toggleMenu={toggleMenu} /> */}
        <header className={`header flex justify-between items-center bg-gray-800 text-white p-4  ${toggleMenu === 'closed' ? '':'header-shifted'} `}>
            <div className='flex items-center space-x-4'>
                <button className="toggle-btn" onClick={() => setToggleMenu(toggleMenu === 'closed' ? 'opened' : 'closed')}>
                    {toggleMenu === 'closed' ? <RiMenuFold4Fill /> : <RiMenuUnfold4Fill />}
                    {toggleMenu === 'closed' ? <Sidebar toggleMenu={'closed'}/> : <Sidebar toggleMenu={'opened'}/>}
                </button>
                <h1>My Website</h1>
            </div>
            <div className="flex justify-between gap-4">
               
                <nav>
                    <ul className="flex space-x-4">

                        {navLinks.map((link, index) =>
                        (
                            <li key={index + link.label}>
                                <Link to={link.url} className="hover:text-gray-400">{link.label}</Link>
                            </li>
                        )
                        )}
                    </ul>
                </nav>
                 <div className="flex justify-between gap-3">
                    <div className="logo">
                        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-blue-300">Nour</h3>

                    <a href="/" className="link">Logout</a>
                </div>
            </div>
        </header>
        </>
    );
}