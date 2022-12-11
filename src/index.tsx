import './index.css';
import {store} from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AppType} from './types';

const rerenderTreeIndex = (state: AppType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 changePost={store.changePost.bind(store)}
                 changeMessage={store.changeMessage.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));

}
rerenderTreeIndex(store.getState())

store.subscribe(rerenderTreeIndex)


