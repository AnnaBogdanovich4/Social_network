import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Post} from './post/Post';
import {ContainerNewPost} from './newpost/ContainerNewPost';
import {StoreContext} from '../../StoreContext';

export const Profile = () => {
    return (
        <StoreContext.Consumer>
            {(store) => (
                <div className={style.profile}>
                    <img className={style.img}
                         src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                         alt=""/>
                    {store.getState().profilePage.avatarData.map(el => <Avatar key={el.id} src={el.src} name={el.name}
                                                                               age={el.age}
                                                                               zodiac={el.zodiac}
                                                                               professional={el.professional}/>)}
                    <ContainerNewPost state={store.getState()}
                                      dispatch={store.dispatch}/>
                    <div className={style.myPosts}>
                        {store.getState().profilePage.postData.map(el => <Post key={el.id} src={el.src}
                                                                               description={el.description}
                                                                               countLike={el.countLike}
                                                                               countDislike={el.countDislike}/>)}
                    </div>
                </div>
            )}
        </StoreContext.Consumer>
    )
}