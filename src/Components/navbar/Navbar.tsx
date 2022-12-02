import style from "./Navbar.module.css"
export const Navbar = () => {
    return(
        <div className={style.navbar}>
           <ul>
               <li><a href="#">Profile</a></li>
               <li><a href="#">Messages</a></li>
               <li><a href="#">News</a></li>
               <li><a href="#">Music</a></li>
               <li><a href="#">Settings</a></li>
           </ul>
        </div>
    )
}