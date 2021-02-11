import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from './types/entities';

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}  />
      </ React.StrictMode>,
      document.getElementById('root')
  )
  ;
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

