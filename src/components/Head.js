import { Link } from "gatsby";
import React from "react";
function Head() {
  return (
    <div style={{display:"flex",gap: 10}}>
      <Link to="/">HOME</Link>
      <Link to="/about">About</Link>
      <Link to="/text">Test</Link>
      <Link to="/text-space">Test-space</Link>
    </div>
  );
}
export default Head