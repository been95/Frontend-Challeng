import "./style.css";

const app = document.querySelector("#app");

fetch("http://localhost:3004/todos")
  .then((res) => res.json())
  .then(console.log);

app.innerHTML = `
<div class="todo-wrapper">
<div class="todo-title">todos</div>
<div class="todo-box">
  <div class="todo-input-box">
    <button class="complete-all-btn">✔</button>
    <input type="text" class="todo-input" placeholder="해야 할 일을 입력해주세요." />
  </div>

  <ul class="todo-list">
    <li class="todo-item checked">
      <div class="checkbox">✔</div>
      <div class="todo">첫번째 할 일</div>
      <button class="delBtn">x</button>
    </li>
    <li class="todo-item">
      <div class="checkbox"></div>
      <div class="todo">두번째 할 일</div>
      <button class="delBtn">x</button>
    </li>
    <li class="todo-item">
      <div class="checkbox"></div>
      <div class="todo">세번째 할 일</div>
      <button class="delBtn">x</button>
    </li>
  </ul>
  <div class="todo-bottom">
    <div class="left-items">3 items left</div>
    <div class="button-group">
      <button class="show-all-btn selected" data-type="all">All</button>
      <button class="show-active-btn" data-type="active">Active</button>
      <button class="show-completed-btn" data-type="completed">Completed</button>
    </div>
    <button class="clear-completed-btn">Clear Completed</button>
  </div>
</div>
<p class="info">더블클릭 시 수정 가능!</p>
</div>
`;
