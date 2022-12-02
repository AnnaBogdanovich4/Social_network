import style from "./Header.module.css"

export const Header = () => {
    return(
        <div className={style.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" alt="logo"/>
            <h1>My social network</h1>
        </div>
    )
}