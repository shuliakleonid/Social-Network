import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './types/entities';


let rerenderEntireTree = (state: StateType) => {
  debugger
  ReactDOM.render(
      <React.StrictMode>
        <App store={state}
             dispatch={store.dispatch.bind(store)}
        />
      </ React.StrictMode>,
      document.getElementById('root')
  )
  ;
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
  const newStore = store.getState()
  rerenderEntireTree(newStore)
});

