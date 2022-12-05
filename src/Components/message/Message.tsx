import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';

export const Message = () => {
    const correspondentData = [
        {id: '1', name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
        {id: '2', name: 'Dima', src: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
        {id: '3', name: 'Milana', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
        {id: '4', name: 'Diana', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511866_11.jpg'},
        {id: '5', name: 'Alex', src: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
        {id: '6', name: 'Esmi', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
    ]
    const dialogsData = [
        {id: '1', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg', message: 'Hi!'},
        {id: '2', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Hi'},
        {id: '3', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg', message: 'I love you'},
        {id: '4', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Me too'},
    ]
    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                {correspondentData.map(el => <Correspondent key={el.id} id={el.id} src={el.src} name={el.name}/>)}
            </div>
            <div className={style.dialogs}>
                {dialogsData.map(el => <Dialogs key={el.id} src={el.src} message={el.message}/>)}
            </div>
        </div>
    )
}