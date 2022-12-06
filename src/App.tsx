import React from 'react';
import style from './App.module.css';
import {Header} from './Components/header/Header';
import {Navbar} from './Components/navbar/Navbar';
import {Content} from './Components/content/Content';
import {BrowserRouter} from 'react-router-dom';
import {StateType} from './types';

function App (props: StateType) {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Header/>
                <Navbar/>
                <Content profilePage={props.state.profilePage} messagePage={props.state.messagePage}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
