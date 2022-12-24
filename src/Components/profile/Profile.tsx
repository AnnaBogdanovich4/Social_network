import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Post} from './post/Post';
import {StateType} from '../../types';
import {ContainerNewPost} from './newpost/ContainerNewPost';

export const Profile = (props: StateType) => {

    return (
        <div className={style.profile}>
            <img className={style.img}
                 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                 alt=""/>
            {props.state.profilePage.avatarData.map(el => <Avatar key={el.id} src={el.src} name={el.name} age={el.age}
                                                                  zodiac={el.zodiac}
                                                                  professional={el.professional}/>)}
            <ContainerNewPost  state={props.state}
                               dispatch={props.dispatch}

            />
            <div className={style.myPosts}>
                {props.state.profilePage.postData.map(el => <Post key={el.id} src={el.src} description={el.description}
                                                                  countLike={el.countLike}
                                                                  countDislike={el.countDislike}/>)}
            </div>
        </div>
    )
}