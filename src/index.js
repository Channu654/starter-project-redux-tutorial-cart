import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { legacy_creatstore } from 'redux';
const store = legacy_creatstore();

ReactDOM.render(<App />, document.getElementById('root'));
