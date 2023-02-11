import {changePostActionCreator, addPostActionCreator} from '../../../reducers/profile-reducer';
import {NewPost} from './Newpost';
import {connect} from 'react-redux';
import {store} from '../../../store';
import {Dispatch} from 'redux';
import {RootStoreType} from '../../../types';

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
type mapStateToPropsType = {
    value: string
}
type mapDispatchToPropsType = {
    changePost: (text: string) => void
    addPost: () => void;
}

let mapStateToProps = (store: RootStoreType): mapStateToPropsType => {
    return {
        value: store.profilePage.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changePost: (text: string) => dispatch(changePostActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator(store.getState().profilePage.messageForNewPost))
    }
}
export const ContainerNewPost = connect(mapStateToProps, mapDispatchToProps)(NewPost)