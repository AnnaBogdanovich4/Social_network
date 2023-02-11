import {ActionType, AddPostActionType, AvatarType, ChangePostActionType, PostType} from '../types';
import {v1} from 'uuid';

export const addPostActionCreator = (messageForNewPost: string): AddPostActionType => ({
    type: 'ADD-POST',
    messageForNewPost: messageForNewPost
})

export const changePostActionCreator = (newMessageForNewPost: string): ChangePostActionType => ({
    type: 'CHANGE-POST',
    newMessageForNewPost: newMessageForNewPost
})
let initialState = {
    avatarData: [{
        id: v1(),
        src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
        name: 'Anita',
        age: '34',
        zodiac: 'Libra',
        professional: 'Front-end Developer',
    },] as AvatarType[],
    postData: [
        {
            id: v1(),
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'Hi!',
            countLike: 15,
            countDislike: 1,
        },
        {
            id: v1(),
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'How are you?', countLike: 10, countDislike: 0,
        },
        {
            id: v1(),
            src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
            description: 'I\'m OK, and you?', countLike: 5, countDislike: 0,
        },
    ] as PostType[],
    messageForNewPost: ''
}
 type initialStateType = typeof initialState

const profileReducer = (state:initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: v1(),
                src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
                description: state.messageForNewPost,
                countLike: 0,
                countDislike: 0,
            }
            return {...state, postData: [newPost, ...state.postData], messageForNewPost: ''};
        case 'CHANGE-POST':
            return {...state, messageForNewPost: action.newMessageForNewPost};
        default:
            return state
    }
}
export default profileReducer

