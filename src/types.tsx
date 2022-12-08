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
    messageForNewPost: string
    addPost:(newDescription: string) => void
    changePost:(newMessageForNewPost:string) => void
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
export type ProfileType = {
    avatarData: AvatarType[];
    postData: PostType[];
    messageForNewPost: string;
}
export type MessageType = {
    correspondentData: CorrespondentType[];
    dialogsData: DialogType[];
    messageForNewDialog: string
}
export type AppType = {
    profilePage: ProfileType;
    messagePage: MessageType;
}
export type StateType = {
    state: AppType
    addPost:(newDescription: string) => void
    addMessage:(newDialogs: string) => void
    changePost:(messageForNewPost:string) => void
    changeMessage:(messageForNewDialog:string) => void
}
