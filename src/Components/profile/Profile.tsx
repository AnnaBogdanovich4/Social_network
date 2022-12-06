import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Newpost} from './newpost/Newpost';
import {Post} from './post/Post';
import {ProfileType} from '../../types';

export const Profile = (props: ProfileType) => {
    return (
        <div className={style.profile}>
            <img className={style.img}
                 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                 alt=""/>
            {props.avatarData.map(el => <Avatar key={el.id} src={el.src} name={el.name} age={el.age} zodiac={el.zodiac}
                                          professional={el.professional}/>)}
            <Newpost/>
            <div className={style.myPosts}>
                {props.postData.map(el => <Post key={el.id} src={el.src} description={el.description} countLike={el.countLike}
                                          countDislike={el.countDislike}/>)}
            </div>
        </div>
    )
}