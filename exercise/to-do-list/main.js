import "./style.css";

const app = document.querySelector("#app");

fetch("http://localhost:3004/todos")
  .then((res) => res.json())
  .then(console.log);

app.innerHTML = `
  <h1>to-do-list</h1>
  <ul>
  <li>todo</li>
  </ul>
`;
