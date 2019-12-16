import React from "react";
import "./style.css";

const Comment = ({ author, children, created_at }) => {
  return (
    <div>
      <span className="author">
        {author} disse em {created_at}:
      </span>
      <p>{children}</p>
    </div>
  );
};

export default Comment;
