import './Layout.css'
import { Link } from 'react-router';
import { GoDotFill } from "react-icons/go";
import { navLinks } from '../liberary/nav.js';
export default function Sidebar({ toggleMenu, setToggleMenu }) {

    return (
        <aside className={`sidebar bg-gray-800 text-white p-4  grow-0 flex flex-col items- ${toggleMenu} `}>
            <div className='py-4'>
                <p className="size-6 w-full font-bold text-amber-300">Welcome</p>
            </div>
            <div>
                <ol>
                    {navLinks.map((link, index) =>
                    (
                        <li key={index + link.label} className='flex items-center'>
                           
                            <GoDotFill  className="pr-2"/>
                            <Link to={link.url} className="hover:text-gray-400" onClick={() => setToggleMenu('closed')}>{link.label}</Link>
                         
                        </li>
                    )
                    )}
                </ol>
            </div>

        </aside>
    );
}
