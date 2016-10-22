import React from 'react';

const PostCount = (count) => {
  return (
    <div data-css-u-center>
      <u>{count.count} posts in the backlog.</u>
    </div>
  );
};


const Post = (post) => {
  return (
    <section data-css-card>
      <h3>{post.post.title}</h3>
      <p>{post.post.lead}</p>
      <a data-css-u-link data-css-read-more href={"./posts/" + post.post.slug}>Read More ➡</a>
    </section>
  );
};

export const App = (props) => {
  let posts = props.posts; // should be an array
  return (
    <article data-css-u-container data-css-app>
      <PostCount count={props.count} />
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </article>
  );
};

export const Header = (props) => {
  return (
    <div data-css-header>
      <h1 data-css-u-container>Welcome to the WorldWideWeb!</h1>
      <h2 data-css-u-container>{props.subtitles[Math.floor(Math.random() * props.subtitles.length)]}</h2>
    </div>
  );
};
