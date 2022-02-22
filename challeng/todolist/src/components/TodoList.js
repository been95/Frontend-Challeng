import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="영어숙제하기" done={true} />
      <TodoItem text="일본어일기쓰기" done={true} />
      <TodoItem text="투두리스트만들기" done={false} />
      <TodoItem text="드로잉숙제하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;