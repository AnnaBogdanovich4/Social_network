import React from 'react';
import {store} from './store';

export const StoreContext = React.createContext(store)

type ProviderTypeOld = {
    store:typeof store
    children: React.ReactNode
}
export const ProviderOld = (props: ProviderTypeOld) => {
    return (<StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
    )
}