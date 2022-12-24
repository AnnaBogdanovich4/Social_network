import style from './Messages.module.css'
import {Dialogs} from './dialogs/Dialogs';
import {Correspondent} from './correspondent/Correspondent';
import {ContainerMessage} from './message/ContainerMessage';
import {StoreContext} from '../../StoreContext';

export const Messages = () => {
    return (
        <StoreContext.Consumer>
            {(store) => (
                <div className={style.messages}>
                    <div className={style.correspondents}>
                        {store.getState().messagePage.correspondentData.map(el => <Correspondent key={el.id} id={el.id}
                                                                                                 src={el.src}
                                                                                                 name={el.name}/>)}
                    </div>
                    <div className={style.dialogs}>
                        {store.getState().messagePage.dialogsData.map(el => <Dialogs key={el.id} src={el.src}
                                                                                     message={el.message}/>)}
                        <ContainerMessage state={store.getState()}
                                          dispatch={store.dispatch}/>
                    </div>
                </div>
            )}
        </StoreContext.Consumer>
    )
}