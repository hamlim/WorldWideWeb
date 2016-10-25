import React from 'react';

export const Header = (props) => {
  return (
    <div data-css-header>
      <h1 data-css-u-container>Welcome to the WorldWideWeb!</h1>
      <marquee><h2 data-css-u-container className="subtitle">{props.subtitles[Math.floor(Math.random() * props.subtitles.length)]}</h2></marquee>
      <h3 data-css-u-container>More coming soon!</h3>
    </div>
  );
};
