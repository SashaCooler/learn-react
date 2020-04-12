import React from 'react';
import style from './Header.module.css';

// {`${style.header} ${style.secondStyle}`}

function Header(props) {
  return (
    <header className={style.header}>
      <img
        src="https://icon2.cleanpng.com/20171220/gze/twitter-logo-png-5a3a1851372e76.0876249315137567532269680.jpg"
        alt="Twitter"
      />
      {props.isAuth ? <span className={style.login}>{props.data.login}</span> : <span className={style.login}>Login</span>}
    </header>
  );
}

export default Header;