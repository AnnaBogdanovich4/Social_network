import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, addMessage, changePost, changeMessage} from './state'
import {AppType} from './types';

export const rerenderTree = (state: AppType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} changePost={changePost} changeMessage={changeMessage}/>
        </BrowserRouter>, document.getElementById('root'));

}
