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
    callBackClick: () => void;
    callBackChange: (text: string) => void
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
    callBackChange: (text:string) => void
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
export type AppType = {
    profilePage: ProfileType;
    messagePage: MessagesType;
}
export type StateType = {
    state: AppType
    dispatch: (action: ActionType) => void
}
export type StoreType = {
    _state: AppType,
    _callSubscribe: () => void,
    getState: () => AppType,
    subscribe:(observer: () => void) => void,
    dispatch:(action: ActionType) => void
}

export type ActionType = AddPostActionType | ChangePostActionType | AddMessageActionType | ChangeMessageActionType

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
