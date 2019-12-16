import React from "react";
import "./style.css";

import Comment from "../../components/Comment";
import CreateComment from "../../components/CreateComment";

const Post = () => {
  const { pathname } = window.location;
  const id = pathname.replace(/\D+/g, "");

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

      <Comment />
      <Comment />
      <Comment />
      <Comment />

      <CreateComment />
    </div>
  );
};

export default Post;
