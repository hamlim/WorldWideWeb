import React from 'react';
import ReactDOM from 'react-dom';
import { Header, App, Footer} from './assets/js/components';
var css = require('./assets/css/main.css');

let subtitles = [
  'Built on the web, for the web!',
  'Filled with awesome GIF\'s',
  '.Titanic { float: none; }'
]

ReactDOM.render(<Header subtitles={subtitles} />, document.getElementById('headerMount'));
