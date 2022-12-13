import {ActionType, AddPostActionType, ChangePostActionType, ProfileType} from '../types';
import {v1} from 'uuid';

export const addPostActionCreator = (messageForNewPost: string): AddPostActionType => ({
    type: 'ADD-POST',
    messageForNewPost: messageForNewPost
})

export const changePostActionCreator = (newMessageForNewPost: string): ChangePostActionType => ({
    type: 'CHANGE-POST',
    newMessageForNewPost: newMessageForNewPost
})

const profileReducer = (state: ProfileType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
                description: state.messageForNewPost,
                countLike: 0,
                countDislike: 0,
            }
            state.postData.unshift(newPost)
            state.messageForNewPost = ''
            return state;
        case 'CHANGE-POST':
            state.messageForNewPost = action.newMessageForNewPost
            return state;
        default:
            return state
    }
}
export default profileReducer