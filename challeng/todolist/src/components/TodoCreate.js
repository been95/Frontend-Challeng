import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoListmenu = styled.div`
  display:flex;
  background:#e3d7e3;
  width: 100%;
  input{
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
  }
  
`;

function TodoCreate() {
  return(
    <TodoListmenu>
    <form className="TodoInsert">
      <input placeholder="할일을 입력하세요"></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
    </TodoListmenu>
  );
}

export default TodoCreate;