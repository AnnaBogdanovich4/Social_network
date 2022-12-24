import React from 'react';
import style from './App.module.css';
import {Header} from './Components/header/Header';
import {Navbar} from './Components/navbar/Navbar';
import {Content} from './Components/content/Content';

function App () {
    return (
        <div className={style.app}>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
