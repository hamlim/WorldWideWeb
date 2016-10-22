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
  // {
  //   title: 'I am a title',
  //   slug: 'test',
  //   id: 1,
  //   lead: 'I am the article lead for this post, this should bring people in to read more about it!',
  //   paragraphs: [
  //     'I am some content!',
  //     'I am another paragraph!'
  //   ]
  // },
  // {
  //   title: 'I am another Title!',
  //   slug: 'testing',
  //   id: 2,
  //   lead: 'I am the article lead for this post, this should bring people in to read more about it!',
  //   paragraphs: [
  //     'I am some more content!',
  //     'I am another full paragraph with a ton of useful content!'
  //   ]
  // }
];
let count = posts.length;

ReactDOM.render(<Header subtitles={subtitles} />, document.getElementById('headerMount'));
ReactDOM.render(<App count={count} posts={posts} />, document.getElementById('appMount'));
