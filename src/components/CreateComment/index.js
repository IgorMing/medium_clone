import React from "react";

const CreateComment = () => {
  return (
    <>
      <label htmlFor="body">Comentário:</label>
      <textarea id="body"></textarea>
      <button type="submit">Enviar</button>
    </>
  );
};

export default CreateComment;
