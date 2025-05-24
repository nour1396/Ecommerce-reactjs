import './Sidebar.css'
import { RiMenuUnfold4Fill  } from "react-icons/ri";
export default function Sidebar({toggleMenu}) {
    
    return (
        <aside className={`bg-gray-800 text-white p-4 sidebar ${toggleMenu} `}>
            <h1>My Website</h1>
            <ul>
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
            </ul>

        </aside>
    );
}