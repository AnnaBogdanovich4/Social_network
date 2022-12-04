import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Newpost} from './newpost/Newpost';
import {Post} from './post/Post';

export const Profile = () => {
    return (
        <div className={style.profile}>
            <img className={style.img} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
            <Avatar src = "https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg"
                    name = 'Anita'
                    age = '34'
                    zodiac = 'Libra'
                    professional = 'Front-end Developer'
            />
            <Newpost/>
            <div className={style.myPosts}>
                <Post src="https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg" description={'Hi!'} countLike={15} countDislike={1}/>
                <Post src="https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg" description={'How are you?'} countLike={10} countDislike={0}/>
                <Post src="https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg" description={"I'm OK, and you?"} countLike={5} countDislike={0}/>
            </div>
        </div>
    )
}