import {Message} from './Message';
import {connect} from 'react-redux';
import {store} from '../../../store';
import {addMessageActionCreator, changeMessageActionCreator} from '../../../reducers/message-reducer';
import {RootStoreType} from '../../../types';
import {Dispatch} from 'redux';

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
type mapStateToPropsType = {
    value: string
}
type mapDispatchToPropsType = {
    callBackClick: () => void;
    callBackChange: (text: string) => void
}

let mapStateToProps = (store: RootStoreType): mapStateToPropsType => {
    return {
        value: store.messagePage.messageForNewDialog
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        callBackClick: () => dispatch(addMessageActionCreator(store.getState().messagePage.messageForNewDialog)),
        callBackChange: (text: string) => dispatch(changeMessageActionCreator(text))
    }
}
export const ContainerMessage = connect(mapStateToProps, mapDispatchToProps)(Message)