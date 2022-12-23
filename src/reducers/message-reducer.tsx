import {ActionType, AddMessageActionType, ChangeMessageActionType, MessageType} from '../types';
import {v1} from 'uuid';

export const changeMessageActionCreator = (newMessageForNewDialog: string): ChangeMessageActionType => ({
    type: 'CHANGE-MESSAGE',
    newMessageForNewDialog: newMessageForNewDialog
})

export const addMessageActionCreator = (newDialogs: string): AddMessageActionType => ({
    type: 'ADD-MESSAGE',
    newDialogs: newDialogs
})
let initialState: MessageType = {
    dialogsData: [
        {id: v1(), src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg', message: 'Hi!'},
        {id: v1(), src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Hi'},
        {
            id: v1(),
            src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
            message: 'I love you'
        },
        {id: v1(), src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Me too'},
    ],
    correspondentData: [
        {id: v1(), name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
        {id: v1(), name: 'Dima', src: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
        {id: v1(), name: 'Milana', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
        {id: v1(), name: 'Diana', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511866_11.jpg'},
        {id: v1(), name: 'Alex', src: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
        {id: v1(), name: 'Esmi', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
    ],
    messageForNewDialog: ''
}

const messageReducer = (state=initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
                message: action.newDialogs
            }
            state.dialogsData.push(newMessage)
            state.messageForNewDialog = ''
            return state
        case 'CHANGE-MESSAGE':
            state.messageForNewDialog = action.newMessageForNewDialog
            return state
        default:
            return state
    }
}

export default messageReducer