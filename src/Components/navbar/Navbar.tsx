import style from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';
export const Navbar = () => {
    return(
        <div className={style.navbar}>
           <ul>
               <li><NavLink to="/profile" className={navLink=>navLink.isActive ? style.active : style.a}>Profile</NavLink></li>
               <li><NavLink to="/messages" className={navLink=>navLink.isActive ? style.active : style.a}>Messages</NavLink></li>
               <li><NavLink to="/news" className={navLink=>navLink.isActive ? style.active : style.a}>News</NavLink></li>
               <li><NavLink to="/music" className={navLink=>navLink.isActive ? style.active : style.a}>Music</NavLink></li>
               <li><NavLink to="/settings" className={navLink=>navLink.isActive ? style.active : style.a}>Settings</NavLink></li>
           </ul>
        </div>
    )
}