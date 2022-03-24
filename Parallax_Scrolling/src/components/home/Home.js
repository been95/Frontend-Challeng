import React, { useState, useEffect } from "react";
import "./index.css";

function Home(){
  const [scrolly, setY] = useState(0);
  useEffect(() => {
    function scrollHandler() {
      setY(window.scrollY);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="home">
      <div className="box spring">spring</div>
      <div
        className="box summer"
        style={{
          backgroundPositionY: scrolly / -1,
        }}
      >
        summer
      </div>
      <div className="box autumn"
      style={{
        backgroundPositionX: scrolly /-3
      }}
      >autumn</div>
      <div className="box winter"
      style={{
        backgroundPositionY: scrolly / 1
      }}
      >winter</div>

      <p className="desc desc1"
      style={{
        transform:`translateX(${-scrolly}px)`,
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum eleifend convallis. Aenean auctor ut orci nec cursus.
        </p>

      <p className="desc desc2"
        style={{
          transform:`translateX(${scrolly}px)`,
          opacity: (scrolly - 100) / 45,
        }}
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus sapien sem, vel bibendum risus fringilla vel. Suspendisse interdum eleifend convallis. Aenean auctor ut orci nec cursus. Fusce mattis bibendum erat eu rutrum. In volutpat est vel risus accumsan placerat. Donec quam massa, congue non erat quis, tincidunt aliquam nisi.</p>
    </div>
  );
}

export default Home;
