import React from 'react';
import {DialogsPageType, ProfilePagesType, StoreType} from './types/entities';
import {CombinedState, Store} from 'redux';

const StoreContext = React.createContext({} as Store<CombinedState<{ profilePage: ProfilePagesType; dialogsPages: DialogsPageType; sidebar: any; }>, any>);

type ProviderType = {
  store: Store<CombinedState<{ profilePage: ProfilePagesType; dialogsPages: DialogsPageType; sidebar: any; }>, any>
  children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}
export default StoreContext;
