import React from "react";
import Article from "./Article";

// Renders one Article per post. Receives: posts (an array)
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        // key must be unique for each item in the list
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;