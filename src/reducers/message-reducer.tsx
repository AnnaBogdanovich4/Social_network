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

const messageReducer = (state: MessageType, action: ActionType) => {
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