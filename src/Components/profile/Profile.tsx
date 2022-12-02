import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Newpost} from './newpost/Newpost';
import {Post} from './post/Post';

export const Profile = () => {
    return (
        <div className={style.profile}>
            <img className={style.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
            <Avatar/>
            <Newpost/>
            <div className={style.myPosts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}