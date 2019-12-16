import React from "react";

const CreatePost = () => {
  return (
    <div className="container">
      <h1>Criar Post</h1>
      <form action="">
        <fieldset>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" />

          <label htmlFor="body">Artigo</label>
          <textarea id="body"></textarea>
          <button class="button-primary" type="submit">
            Criar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePost;
