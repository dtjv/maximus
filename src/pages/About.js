import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Go to <Link to="/">Home</Link> now!
      </p>
    </>
  );
}

export { About };
