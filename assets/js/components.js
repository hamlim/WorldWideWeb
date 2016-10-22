import React from 'react';

export const Header = (props) => {
  return (
    <div data-css-header>
      <h1>Welcome to the WorldWideWeb!</h1>
      <h2>{props.subtitles[Math.floor(Math.random() * props.subtitles.length)]}</h2>
    </div>
  )
};

export const App = (props) => {

}
