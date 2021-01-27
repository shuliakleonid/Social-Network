import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state'
import {PostsType} from './types/entities';


export const rerenderEntireTree = (state:PostsType) => {
  ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost}/>
      </ React.StrictMode>,
      document.getElementById('root')
  )
  ;
}

