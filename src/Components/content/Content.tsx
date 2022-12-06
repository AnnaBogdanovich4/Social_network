// @ts-ignore
import style from './Content.module.css'
import {Profile} from '../profile/Profile';
import {Message} from '../message/Message';
import {Route, Routes} from 'react-router-dom';
import {Music} from '../music/Music';
import {News} from '../news/News';
import {Settings} from '../settings/Settings';
import {AppType} from '../../types';

export const Content = (props: AppType) => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path={'/profile'} element={<Profile avatarData={props.profilePage.avatarData} postData={props.profilePage.postData}/>}/>
                <Route path={'/messages/*'} element={<Message correspondentData={props.messagePage.correspondentData}
                                                              dialogsData={props.messagePage.dialogsData}/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>
        </div>
    )
}