import React from 'react';
import ReactDOM from 'react-dom';
import { Header, App, Footer} from './assets/js/components';
var css = require('./assets/css/main.css');

let subtitles = [
  'Built on the web, for the web!',
  'Filled with awesome GIF\'s',
  '.Titanic { float: none; }',
  '$(\'#app\').init();'
];


let posts = [
  {
    title: 'I am a title',
    id: 1,
    paragraphs: [
      'I am some content!',
      'I am another paragraph!'
    ]
  },
  {
    title: 'I am another Title!',
    id: 2,
    paragraphs: [
      'I am some more content!',
      'I am another full paragraph with a ton of useful content!'
    ]
  }
];
let count = posts.length;

ReactDOM.render(<Header subtitles={subtitles} />, document.getElementById('headerMount'));
ReactDOM.render(<App count={count} posts={posts} />, document.getElementById('appMount'));
