import React, { useState, useEffect } from "react";
import "./index.css";

function Home() {
  // state
  const [y, setY] = useState(0);

  // useEffect 두번째 인자가 [] 빈 배열이면, 처음 컴포넌트가 마운트 될 때라는 뜻입니다.
  useEffect(() => {
    function scrollHandler() {
      setY(window.scrollY);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  console.log(y / -3);

  return (
    <div className="home">
      <div className="box spring">spring</div>
      <div
        className="box summer"
        style={{
          backgroundPositionX: y / -3,
        }}
      >
        summer
      </div>
      <div className="box autumn">autumn</div>
      <div className="box winter">winter</div>

      <p className="desc desc1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum eleifend convallis. Aenean auctor ut orci nec cursus.</p>

      <p className="desc desc2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum eleifend convallis. Aenean auctor ut orci nec cursus. Fusce mattis bibendum erat eu rutrum. In volutpat est vel risus accumsan placerat. Donec quam massa, congue non erat quis, tincidunt aliquam nisi.</p>
    </div>
  );
}

export default Home;
