import React from 'react';
import './index.css';
import store from './redux/state';
import {PostsType} from './types/entities';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (state: PostsType) => {
  ReactDOM.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </ React.StrictMode>,
      document.getElementById('root')
  )
  ;
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

