import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { Link } from "react-router-dom";
const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  //   console.log(todos);
  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  //   console.log(deleteTodo);
  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <StbigContainer>
      <h2>working...</h2>
      <Stmiddle>
        {todos.map((todo) => {
          // console.log(todo);
          if (!todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </Link>
                <h2>{todo.title}</h2>
                <div>{todo.content}</div>
                <Stbutton onClick={() => onToggleStatusTodo(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </Stbutton>
                <Stbutton onClick={() => onDeleteTodo(todo.id)}>삭제</Stbutton>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}{" "}
      </Stmiddle>

      <h2>done...</h2>
      <Stmiddle>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <Link to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </Link>
                <h2>{todo.title}</h2>
                <div>{todo.content}</div>
                <Stbutton onClick={() => onToggleStatusTodo(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </Stbutton>
                <Stbutton onClick={() => onDeleteTodo(todo.id)}>삭제</Stbutton>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </Stmiddle>
    </StbigContainer>
  );
};

export default List;

const StbigContainer = styled.div``;
const Stmiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const StTodoContainer = styled.div`
  border-radius: 15px;
  border: 3px solid greenyellow;
  padding: 10px 10px 10px 10px;
  width: 270px;
  min-height: 150px;
`;
const Stbutton = styled.button`
  border: 1px solid;
  background-color: #fff;
  border-radius: 12px;
  height: 40px;
  width: 90px;
`;
