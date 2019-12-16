import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "../../axios";

import CreateComment from "../../components/CreateComment";
import Comment from "../../components/Comment";

const Post = () => {
  const { pathname } = window.location;
  const id = pathname.replace(/\D+/g, "");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const { data } = await axios.get(`/posts/${id}/comments`);
      setComments(data);
    }

    fetchComments();
  }, []);

  function renderComments() {
    if (!comments.length) {
      return "Nenhum comentário para este post...";
    }

    return comments.map(post => (
      <Comment
        key={post.id}
        author={post.author}
        created_at={new Date(post.created_at).toLocaleString("pt-BR")}
      >
        {post.body}
      </Comment>
    ));
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Post {id} </h1>
        <h3>por Autor</h3>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          similique autem quos! Qui vero velit nobis temporibus praesentium,
          voluptatibus minima expedita voluptas quam quaerat illo est ullam
          eveniet provident totam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae officiis explicabo enim. Ipsam quae
          ducimus eum facilis quod labore consequuntur magnam, tenetur
          laboriosam iste? Modi qui quam perferendis culpa? Accusamus!
        </p>
      </div>

      {renderComments()}

      <CreateComment />
    </div>
  );
};

export default Post;
