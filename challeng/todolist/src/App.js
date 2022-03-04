import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

// 1. PROVIDER: CONTEXT API, REDUX, REDUX THUNK, REDUX SAGA, REDUX TOOLKIT, RECOIL....
// 2. REDUCER: prev state(이전 상태객체) -> next state(새로운 객체)체
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
