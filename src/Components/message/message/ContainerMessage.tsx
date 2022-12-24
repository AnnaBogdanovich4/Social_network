import {Message} from './Message';
import {addMessageActionCreator, changeMessageActionCreator} from '../../../reducers/message-reducer';
import {StateType} from '../../../types';

export const ContainerMessage = (props: StateType) => {
    const callBackClick = () => {
        let action = addMessageActionCreator(props.state.messagePage.messageForNewDialog)
        props.dispatch(action)
    }
    const callBackChange = (text: string) => {
        let action = changeMessageActionCreator(text)
        props.dispatch(action)
    }
        return(
        <Message value={props.state.messagePage.messageForNewDialog}
                 callBackChange={(text: string) => callBackChange(text)}
                 callBackClick={callBackClick}/>
        )}