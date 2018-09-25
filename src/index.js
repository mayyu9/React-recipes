import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import './styles/index.css';

const mountElement = document.getElementById('root');

ReactDom.render(<App />, mountElement);
