//휴먼 에러를 줄이기위해
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//액션 크리에이터
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

//초기값설정
const initialState = [
  {
    id: 1,
    title: "리액트",
    content: "리덕스",
    isDone: false,
  },
  {
    id: 2,
    title: "리액트1",
    content: "리덕스2",
    isDone: false,
  },
  {
    id: 3,
    title: "리액트2",
    content: "리덕스3",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    // {...state, 바꿀속성: 문장}
    case DELETE_TODO: {
      const copy = state.filter((todo) => todo.id !== action.payload);
      return copy;
      // return state.filter((todo) => todo.id !== action.payload);
    }
    case TOGGLE_STATUS_TODO: {
      const toggle = state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      // console.log(toggle);
      return toggle;
    }

    default:
      return state;
  }
};
export default todos;
