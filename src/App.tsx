import React from 'react';
import style from './App.module.css';
import {Header} from './Components/header/Header';
import {Navbar} from './Components/navbar/Navbar';
import {Content} from './Components/content/Content';
import {StateType} from './types';

function App (props: StateType) {
    return (
        <div className={style.app}>
            <Header/>
            <Navbar/>
            <Content state={props.state}
                     addPost={props.addPost}
                     addMessage={props.addMessage}
            />
        </div>
    );
}

export default App;
