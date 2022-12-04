import style from './Message.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';

export const Message = () => {
    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                <Correspondent id="1" name="Anna" src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg"/>
                <Correspondent id="2" name="Dima" src="https://klike.net/uploads/posts/2019-03/1551515594_15.jpg"/>
                <Correspondent id="3" name="Milana" src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg"/>
                <Correspondent id="4" name="Diana"
                               src="https://klike.net/uploads/posts/2019-03/medium/1551511866_11.jpg"/>
                <Correspondent id="5" name="Alex" src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg"/>
                <Correspondent id="6" name="Esmi"
                               src="https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg"/>
            </div>
            <div className={style.dialogs}>
                <Dialogs src="https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg" message='Hi!'/>
                <Dialogs src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" message='Hi'/>
                <Dialogs src="https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg" message='I love you'/>
                <Dialogs src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" message='Me too'/>
            </div>
        </div>
    )
}