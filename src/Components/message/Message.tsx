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
                <Correspondent id={correspondentData[0].id} name={correspondentData[0].name}
                               src={correspondentData[0].src}/>
                <Correspondent id={correspondentData[1].id} name={correspondentData[1].name}
                               src={correspondentData[1].src}/>
                <Correspondent id={correspondentData[2].id} name={correspondentData[2].name}
                               src={correspondentData[2].src}/>
                <Correspondent id={correspondentData[3].id} name={correspondentData[3].name}
                               src={correspondentData[3].src}/>
                <Correspondent id={correspondentData[4].id} name={correspondentData[4].name}
                               src={correspondentData[4].src}/>
                <Correspondent id={correspondentData[5].id} name={correspondentData[5].name}
                               src={correspondentData[5].src}/>
            </div>
            <div className={style.dialogs}>
                <Dialogs src={dialogsData[0].src} message={dialogsData[0].message}/>
                <Dialogs src={dialogsData[1].src} message={dialogsData[1].message}/>
                <Dialogs src={dialogsData[2].src} message={dialogsData[2].message}/>
                <Dialogs src={dialogsData[3].src} message={dialogsData[3].message}/>
            </div>
        </div>
    )
}