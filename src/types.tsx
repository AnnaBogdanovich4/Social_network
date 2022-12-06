export type AvatarType = {
    id?: number
    src: string
    name: string
    age: string
    zodiac: string
    professional: string
}
export type PostType = {
    id?: number
    src: string
    description: string
    countLike: number
    countDislike: number
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
}
export type MessageType = {
    correspondentData: CorrespondentType[];
    dialogsData: DialogType[];
}
export type AppType = {
    profilePage: ProfileType;
    messagePage: MessageType
}
export type StateType = {
    state: AppType
}