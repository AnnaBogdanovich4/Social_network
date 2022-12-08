// @ts-ignore
import style from './Content.module.css'
import {Profile} from '../profile/Profile';
import {Message} from '../message/Message';
import {Route, Routes} from 'react-router-dom';
import {Music} from '../music/Music';
import {News} from '../news/News';
import {Settings} from '../settings/Settings';
import {StateType} from '../../types';

export const Content = (props: StateType) => {
    return (
        <div className={style.content}>
            <Routes>
                <Route path={'/profile'} element={<Profile state={props.state}
                                                           addPost={props.addPost}
                                                           addMessage={props.addMessage}/>}/>
                <Route path={'/messages/*'}
                       element={<Message state={props.state}
                                         addPost={props.addPost}
                                         addMessage={props.addMessage}/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>
        </div>
    )
}