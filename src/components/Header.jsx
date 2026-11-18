import React from "react";

// Shows the blog's name. Receives: name
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;