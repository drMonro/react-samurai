import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export const rerenderDOM = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderDOM(store.getState())

store.subscribe(() => {
    rerenderDOM(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
