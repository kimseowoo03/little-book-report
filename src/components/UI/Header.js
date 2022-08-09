import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>작은 도서관</h1>
      <nav className={classes.nav}>
        <ul >
          <li>홈</li>
          <li>추천도서</li>
          <li>감상평</li>
        </ul>
      </nav>
      <button>로그인</button>
    </div>
  );
};

export default Header;