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
        <TodoItem text="일본어일기" done={true} />
        <TodoItem text="영어독해숙제" done={true} />
        <TodoItem text="TODOLIST 만들기" done={false} />
        <TodoItem text="일러스트숙제" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;