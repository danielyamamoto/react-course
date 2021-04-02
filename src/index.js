import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "./assets/styles/normalize.css";
import "./assets/sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import burgerBuilderReducer from './store/reducers/burgerBuilder';

const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
