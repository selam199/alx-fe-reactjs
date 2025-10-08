import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2>Blog Post</h2>
      <p>Displaying blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
