import style from './Messages.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';
import {StateType} from '../../types';
import {ContainerMessage} from './message/ContainerMessage';

export const Messages = (props: StateType) => {

    return (
        <div className={style.messages}>
            <div className={style.correspondents}>
                {props.state.messagePage.correspondentData.map(el => <Correspondent key={el.id} id={el.id} src={el.src}
                                                                                    name={el.name}/>)}
            </div>
            <div className={style.dialogs}>
                {props.state.messagePage.dialogsData.map(el => <Dialogs key={el.id} src={el.src}
                                                                        message={el.message}/>)}
                <ContainerMessage state={props.state}
                                  dispatch={props.dispatch}/>
            </div>

                {/*<Message value={props.state.messagePage.messageForNewDialog}*/}
                {/*         callBackChange={(text: string) => callBackChange(text)}*/}
                {/*         callBackClick={callBackClick}/>*/}

        </div>
    )
}