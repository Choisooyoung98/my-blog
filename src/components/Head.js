import { Link } from "gatsby";
import React from "react";
function Head() {
  return (
    <div style={{display:"flex",gap: 10}}>
      <Link to="/">HOME</Link>
      <Link to="/About">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test-space">Test-space</Link>
    </div>
  );
}
export default Head