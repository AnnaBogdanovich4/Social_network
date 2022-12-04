import style from './Profile.module.css'
import {Avatar} from './avatar/Avatar';
import {Newpost} from './newpost/Newpost';
import {Post} from './post/Post';

export const Profile = () => {
    const avatarData = [
        {
            id: '1',
            src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
            name: 'Anita',
            age: '34',
            zodiac: 'Libra',
            professional: 'Front-end Developer',
        },
    ]
    const postData = [
        {
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'Hi!', countLike: 15, countDislike: 1,
        },
        {
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'How are you?', countLike: 10, countDislike: 0,
        },
        {
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'I\'m OK, and you?', countLike: 5, countDislike: 0,
        },
    ]
    return (
        <div className={style.profile}>
            <img className={style.img}
                 src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                 alt=""/>
            <Avatar src={avatarData[0].src}
                    name={avatarData[0].name}
                    age={avatarData[0].age}
                    zodiac={avatarData[0].zodiac}
                    professional={avatarData[0].professional}
            />
            <Newpost/>
            <div className={style.myPosts}>
                <Post
                    src={postData[0].src}
                    description={postData[0].description} countLike={postData[0].countLike} countDislike={postData[0].countDislike}/>
                <Post
                    src={postData[1].src}
                    description={postData[1].description} countLike={postData[1].countLike} countDislike={postData[1].countDislike}/>
                <Post
                    src={postData[2].src}
                    description={postData[2].description} countLike={postData[2].countLike} countDislike={postData[2].countDislike}/>
            </div>
        </div>
    )
}