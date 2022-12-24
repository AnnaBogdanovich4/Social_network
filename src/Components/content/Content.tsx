import style from './Content.module.css'
import {Profile} from '../profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {Music} from '../music/Music';
import {News} from '../news/News';
import {Settings} from '../settings/Settings';
import {Messages} from '../message/Messages';

export const Content = () => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages/*'} element={<Messages/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>
        </div>
    )
}