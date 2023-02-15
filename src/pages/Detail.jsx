import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const todo = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const todoslists = todo.find((todo) => {
    console.log(Number(id));
    return todo.id === Number(id);
  });
  console.log(todo);

  return (
    <Stcontainer>
      <StbigContainer>
        <div>
          <StHeder>
            <div>ID:{todoslists.id}</div>
            <StButton
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StHeder>
          <div>{todoslists.title}</div>
          <div>{todoslists.content}</div>
        </div>
      </StbigContainer>
    </Stcontainer>
  );
};

export default Detail;

const Stcontainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StbigContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StHeder = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
`;
