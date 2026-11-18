import React from "react";

// Sidebar with the blog logo and description. Receives: image, about.
// If no image is passed, a placeholder image is used instead.
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;