import React, { useRef, useEffect } from 'react';
import './styleNav.css'

function NavBar() {
  const menuRef = useRef(null);
  const menuBurgerRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      const menuBg = menuRef.current;
      const menuItems = menuRef.current.children[1];
      const menuBurger = menuBurgerRef.current;

      menuBg.classList.toggle('fs');
      menuItems.classList.toggle('fs');
      menuBurger.classList.toggle('fs');

      const text = menuBurger.textContent;
      if (text === '☰') {
        menuBurger.textContent = '✕';
      } else {
        menuBurger.textContent = '☰';
      }
    };

    const menuBurger = menuBurgerRef.current;
    menuBurger.addEventListener('click', handleClick);

    return () => {
      menuBurger.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="menu-bg" ref={menuRef}>
      <div className="menu-items" ref={menuRef}>
        <div className="menu-burger" ref={menuBurgerRef}>☰</div>
      </div>
    </div>
  );
}

export default NavBar;