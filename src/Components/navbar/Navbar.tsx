import style from "./Header.module.css"
export const Header = () => {
    return(
        <div className={style.header}>
            <img src="src/Components/header/Header" alt=""/>
            <h1>My social network</h1>
        </div>
    )
}