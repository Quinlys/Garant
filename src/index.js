import store from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
});