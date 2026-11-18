import React from "react";

// One blog post. Receives: title, date, preview.
// If no date is passed, a default date is shown instead.
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;