import './Layout.css'

import { RiMenuFold4Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import { TfiShoppingCartFull } from "react-icons/tfi";


export default function Header({ toggleMenu, setToggleMenu }) {

    // const [loggedIn, setLoggedIn] = useState(false); // Assuming user is logged in for demonstration
    // console.log(`Header component rendered with menu state: ${toggleMenu}`);
    return (
        <>
            {/* <Sidebar toggleMenu={toggleMenu} /> */}
            <header className={`flex justify-between items-center bg-gray-800 text-white p-4 `}>
                <div className='flex items-center space-x-4'>
                    <button className="toggle-btn" onClick={() => setToggleMenu(toggleMenu === 'closed' ? '' : 'closed')}>
                        {toggleMenu === 'closed' ? <RiMenuFold4Fill /> : <RiMenuUnfold4Fill />}

                    </button>
                    <h1>My Website</h1>
                </div>

                <div className="flex justify-between gap-3">
                    <div className="flex items-center mx-2 px-2">
                        <span className="cart_counter">0</span>
                        <TfiShoppingCartFull className="cart_icon text-xl text-gray-300"/>
                    </div>
                    <div className="logo">
                        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-blue-300">Nour</h3>

                    <a href="/" className="link">Logout</a>
                </div>

            </header>
        </>
    );
}