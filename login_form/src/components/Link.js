import React, { Component } from "react";

// The Link component is a simple helper to avoid calling event.preventDefault()
// every time we want to render a dummy link in our app.
const Link = () => {
  const _handleClick = (event) => {
    event.preventDefault();
    this.props.onClick();
  };

  return (
    // eslint-disable-next-line
    <a href="#" onClick={_handleClick}>
      {this.props.children}
    </a>
  );
};

export default Link;
