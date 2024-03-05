// import { useState } from "react";
// TodoMain에서 보낸 todo, setTodo, setTodoList props(properties)로 받기
const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  //   const [todo, setTodo] = useState("");
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };

  const addBtnClickHandler = () => {
    setTodoList([...todoList, todo]);
  };
  return (
    <div className="input">
      <input
        placeholder="To Do..."
        value={todo}
        onChange={todoOnChangeHandler}
      />
      {/* todo state에 저장된 값이 2글자 이상일때만 버튼을 클릭할 수 있도록 하라 */}
      <button
        id="btn_add"
        onClick={addBtnClickHandler}
        disabled={todo.length < 2}
      >
        추가
      </button>
    </div>
  );
};
export default TodoInput;
