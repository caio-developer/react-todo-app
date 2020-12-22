import React from 'react';

export const GlobalContext = React.createContext();

function Storage({ children }) {
  const [cart, setCart] = React.useState([]);
  const [notification, setNotification] = React.useState(() => <p>Notificação</p>);

  return (
    <GlobalContext.Provider value={{ cartCounter: cart.length, notification }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Storage;
