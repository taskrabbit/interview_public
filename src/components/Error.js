import React from "react";
import Link from "./Link";

const Error = ({ message, tryAgain }) => (
  <div>
    <p className="app__error">{message}</p>
    <Link onClick={tryAgain}>Try again</Link>
  </div>
);
export default Error;
