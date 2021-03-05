import React, { Component } from "react";

// The Link component is a simple helper to avoid calling event.preventDefault()
// every time we want to render a dummy link in our app.
const Link = (props) => {
  const _handleClick = (event) => {
    event.preventDefault();
    props.onClick();
  };

  return (
    // eslint-disable-next-line
    <a href="#" onClick={_handleClick}>
      {props.children}
    </a>
  );
};

export default Link;
