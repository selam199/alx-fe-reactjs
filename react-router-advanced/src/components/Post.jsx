import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <p>Displaying post with ID: {postId}</p>;
};

export default Post;
