import store from './redux/state'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);