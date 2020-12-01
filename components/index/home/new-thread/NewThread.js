import React, { useContext, useState } from "react";
import Router from "next/router";
import styled from "styled-components";

import useValidate from "../../../../hooks/useValidate";
import validateNewPost from "../../../../validations/validateNewPost";

import { FirebaseContext } from "../../../../firebase/index";

const INITIAL_STATE = {
  text: "",
};

export default function NewThread() {
  //TODO: Firebase Context
  const { user, fbase } = useContext(FirebaseContext);

  const [error, setError] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useValidate(
    INITIAL_STATE,
    validateNewPost,
    createThread
  );

  const { text } = values;

  async function createThread() {
    if (!user) {
      Router.push("/auth");
    }

    const thread = {
      user: "Matias",
      text,
      likes: 0,
      comments: [],
      date: Date.now(),
    };

    fbase.db.collection("threads").add(thread);
  }

  return (
    <NewPostContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Write a post</p>
        <textarea
          value={text}
          onChange={handleChange}
          name="text"
          placeholder="What's on your mind?"
          rows="4"
          maxLength="256"
        />
        <span>{errors.text}</span>
        <button>Send</button>
      </form>
    </NewPostContainer>
  );
}

const NewPostContainer = styled.div`
  padding: 16px;

  form {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding: 8px 16px;
  }

  p {
    font-size: 0.9rem;
  }

  textarea {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    resize: none;
  }

  span {
    color: #999999;
    font-size: 0.9rem;
    font-weight: 700;
  }

  button {
    margin-left: auto;
    background: transparent;
    background: #cba3ec;
    color: #ffffff;
    padding: 8px 32px;
    font-size: 1rem;
    border-radius: 25px;
  }
`;
