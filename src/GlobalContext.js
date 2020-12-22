import React from 'react';

export const GlobalContext = React.createContext();

function Storage({ children }) {
  const [cart, setCart] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ cartCounter: cart.length }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Storage;
