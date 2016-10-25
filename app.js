import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './assets/js/components';
var css = require('./assets/css/main.css');

let subtitles = [
  'Built on the web, for the web!',
  'Filled with awesome GIF\'s',
  '.Titanic { float: none; }',
  '$(\'#app\').init();'
];

ReactDOM.render(<Header subtitles={subtitles} />, document.getElementById('headerMount'));
