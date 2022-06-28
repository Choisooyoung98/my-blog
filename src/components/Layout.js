import { Link } from "gatsby";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <main>
        <div style={{display:"flex", gap: 10}}>
          <Link to="/">HOME</Link>
          <Link to="/About">About</Link>
        </div>

        {children}

        <div>All Right Reserved.</div>
      </main>
    </>
  );
}

export default Layout