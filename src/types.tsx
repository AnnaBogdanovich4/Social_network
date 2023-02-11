import {rootReducer} from './store';

export type AvatarType = {
    id?: string
    src: string
    name: string
    age: string
    zodiac: string
    professional: string
}
export type PostType = {
    id?: string
    src: string
    description: string
    countLike: number
    countDislike: number
}
export type NewPostType = {
    value: string;
    addPost: () => void;
    changePost: (text: string) => void
}
export type DialogType = {
    id?: string
    src: string
    message: string
}
export type CorrespondentType = {
    id: string
    name: string
    src: string
}
export type MessageType = {
    value: string;
    callBackClick: () => void;
    callBackChange: (text: string) => void
}
export type ProfileType = {
    avatarData: AvatarType[];
    postData: PostType[];
    messageForNewPost: string;
}
export type MessagesType = {
    correspondentData: CorrespondentType[];
    dialogsData: DialogType[];
    messageForNewDialog: string
}
export type UsersType = {
    userId: string,
    src: string,
    status: boolean,
    name: string,
    info: string,
    country: string,
    city: string,
}
export type AvaType = {
    src: string
    id: string
    status: boolean
    name: string,
    info: string,
    country: string,
    city: string,
    followed: (id: string) => void,
    unfollowed: (id: string) => void,
    addUsers: (users: UsersType[]) => void,
}

export type RootStoreType = ReturnType <typeof rootReducer>

export type ActionType = AddPostActionType
    | ChangePostActionType
    | AddMessageActionType
    | ChangeMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType

export type AddPostActionType = {
    type: 'ADD-POST',
    messageForNewPost: string
}
export type ChangePostActionType = {
    type: 'CHANGE-POST',
    newMessageForNewPost: string
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE',
    newDialogs: string
}
export type ChangeMessageActionType = {
    type: 'CHANGE-MESSAGE',
    newMessageForNewDialog: string
}
export type FollowActionType = {
    type: 'FOLLOW',
    id: string
}
export type UnfollowActionType = {
    type: 'UNFOLLOW',
    id: string
}
export type SetUsersActionType = {
    type: 'SET_USERS',
    users: UsersType[]
}


