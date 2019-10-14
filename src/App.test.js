/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: qiye
 * @Date: 2019-10-14 15:53:59
 * @LastEditors: qiye
 * @LastEditTime: 2019-10-14 15:53:59
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
