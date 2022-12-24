import React from 'react';
import {store} from './store';

export const StoreContext = React.createContext(store)

export const Provider = (props: any) => {
    return (<StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
    )
}