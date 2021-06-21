import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
    {message: 'Hello!'},
    {message: 'Hi!'},
    {message: "What's up!"},
]

const messagesData = [
    {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {message: 'Lorem ipsum dolor sit amet.'},
    {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
