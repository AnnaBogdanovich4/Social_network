import {changePostActionCreator, addPostActionCreator} from '../../../reducers/profile-reducer';
import {NewPost} from './Newpost';
import {connect} from 'react-redux';
import {store} from '../../../store';

// export const ContainerSuperNewPost = (props: StateType) => {
//     const callBackClick = () => {
//         let action = addPostActionCreator(props.state.profilePage.messageForNewPost)
//         props.dispatch(action)
//     }
//
//     const callBackChange = (text: string) => {
//         let action = changePostActionCreator(text)
//         props.dispatch(action)
//     }
//
//     return (
//         <div>
//             <NewPost value={props.state.profilePage.messageForNewPost}
//                      callBackChange={(text:string) => callBackChange(text)}
//                      callBackClick={callBackClick}/>
//         </div>
//     )
// }

let mapStateToProps = () => {
    return {
        value: store.getState().profilePage.messageForNewPost
    }
}
let mapDispatchToProps = () => {
    return {
        callBackChange: (text: string) => store.dispatch(changePostActionCreator(text)),
        callBackClick: () => store.dispatch(addPostActionCreator(store.getState().profilePage.messageForNewPost))
    }
}
export const ContainerNewPost = connect(mapStateToProps, mapDispatchToProps)(NewPost)