import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    .text_wrap li{
        display:inline-block;
    }
    h1 {
        margin: 0;
        font-size: 36px;
        color: #9c67a9;
    }
    .day {
        color: #868e96;
        font-size: 18px;
        margin-left: 20px;
        
    }
    .tasks {
        color: #474747;
        font-size: 18px;
        margin-top: 20px;
        font-weight: bold;
        text-align:center;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
        <ul className="text_wrap">
            <li><h1>2022년 2월 22일</h1></li>
            <li className="day">화요일</li>
        </ul>
        <div className="tasks">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;