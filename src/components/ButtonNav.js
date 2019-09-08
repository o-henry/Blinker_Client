import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonNav.css";

//* Restart, Go Back 고정 버튼 부분.
//* 아니면 버튼 생성하는 컴포넌트를 새로 만들어서, 재활용 하는 방향 으로 ?
const ButtonNav = () => {
  return (
    <div>
      <div className="container">
        <div className={`btn-nav-item`}>
          <button
            id={`restart-btn`}
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Restart
          </button>
        </div>
        <div className={`btn-nav-item`}>
          <button id={`goback-btn`}>
            <NavLink to="/">Go Back</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonNav;
