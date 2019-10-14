/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: qiye
 * @Date: 2019-10-14 15:53:59
 * @LastEditors: qiye
 * @LastEditTime: 2019-10-14 17:10:54
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
