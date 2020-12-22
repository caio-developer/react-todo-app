import React from 'react';
import { GlobalContext } from '../GlobalContext';

function Header() {
  const { cartCounter, notification } = React.useContext(GlobalContext);

  return (
    <div className='header'>
      <div className='counter__viewer'>
        <p>Counter: {cartCounter}</p>
      </div>
      <div className='notification__viewer'>{notification}</div>
    </div>
  );
}

export default Header;
