import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {NewPost} from './newpost/Newpost';
import {Post} from './post/Post';
import {StateType} from '../../types';

export const Profile = (props: StateType) => {
    return (
        <div className={style.profile}>
            <img className={style.img}
                 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                 alt=""/>
            {props.state.profilePage.avatarData.map(el => <Avatar key={el.id} src={el.src} name={el.name} age={el.age} zodiac={el.zodiac}
                                          professional={el.professional}/>)}
            <NewPost addPost={props.addPost}
            messageForNewPost={props.state.profilePage.messageForNewPost}
            changePost={props.changePost}/>
            <div className={style.myPosts}>
                {props.state.profilePage.postData.map(el => <Post key={el.id} src={el.src} description={el.description} countLike={el.countLike}
                                          countDislike={el.countDislike}/>)}
            </div>
        </div>
    )
}