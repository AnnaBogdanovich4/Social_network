import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store';
import {StoreContext} from './StoreContext';
import {Provider} from 'react-redux';

const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

            {/* <StoreContext.Provider value={store}>*/}
            {/*    <App />*/}
            {/*</StoreContext.Provider>*/}

        </BrowserRouter>, document.getElementById('root'));

}
rerenderTree()

store.subscribe(rerenderTree)


