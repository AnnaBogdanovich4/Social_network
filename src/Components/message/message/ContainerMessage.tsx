import {Message} from './Message';
import {connect} from 'react-redux';
import {store} from '../../../store';
import {addMessageActionCreator, changeMessageActionCreator} from '../../../reducers/message-reducer';

// export const ContainerSuperMessage = (props: StateType) => {
//     const callBackClick = () => {
//         let action = addMessageActionCreator(props.state.messagePage.messageForNewDialog)
//         props.dispatch(action)
//     }
//     const callBackChange = (text: string) => {
//         let action = changeMessageActionCreator(text)
//         props.dispatch(action)
//     }
//         return(
//         <Message111 value={props.state.messagePage.messageForNewDialog}
//                  callBackChange={(text: string) => callBackChange(text)}
//                  callBackClick={callBackClick}/>
//         )}

let mapStateToProps = () => {
    return {
        value: store.getState().messagePage.messageForNewDialog
    }
}

let mapDispatchToProps = () => {
    return {
        callBackClick: () => store.dispatch(addMessageActionCreator(store.getState().messagePage.messageForNewDialog)),
        callBackChange: (text: string) => store.dispatch(changeMessageActionCreator(text))
    }
}
export const ContainerMessage = connect(mapStateToProps, mapDispatchToProps)(Message)