import React from "react";
import "../index.css";

/*function Home(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}*/
function Home({ children }) {
  const style = {
    border: "1px solid black",
    padding: 20,
    width: 200,
  };
  return <div style={style}>{children}</div>;
}

export default Home;
