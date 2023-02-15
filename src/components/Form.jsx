import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmitHandler = (event) => {
    if (title === "" && content === "") return;
    event.preventDefault();
    const newObj = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newObj));
    setContent("");
    setTitle("");
  };
  console.log(addTodo);
  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StinputBox>
        <StformTitle>제목</StformTitle>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <StformTitle>내용</StformTitle>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </StinputBox>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
}

export default Form;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;

const StinputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StformTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
