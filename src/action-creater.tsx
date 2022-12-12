import {AddMessageActionType, AddPostActionType, ChangeMessageActionType, ChangePostActionType} from './types';

export const changeMessageActionCreator = (newMessageForNewDialog: string): ChangeMessageActionType => ({
    type: 'CHANGE-MESSAGE',
    newMessageForNewDialog: newMessageForNewDialog
})

export const addMessageActionCreator = (newDialogs: string): AddMessageActionType => ({
    type: 'ADD-MESSAGE',
    newDialogs: newDialogs
})

export const changePostActionCreator = (newMessageForNewPost: string): ChangePostActionType => ({
    type: 'CHANGE-POST',
    newMessageForNewPost: newMessageForNewPost
})

export const addPostActionCreator = (messageForNewPost: string): AddPostActionType => ({
    type: 'ADD-POST',
    messageForNewPost: messageForNewPost
})