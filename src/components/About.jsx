import React from "react";

// Sidebar with the blog logo and description. Receives: image, about
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;