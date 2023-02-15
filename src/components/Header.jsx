import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Stcontainer>
      <div>My Todo List</div>
      <div>React</div>
    </Stcontainer>
  );
}

export default Header;

const Stcontainer = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 15px;
`;
