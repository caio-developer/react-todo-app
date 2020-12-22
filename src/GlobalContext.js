import React from 'react';

export const GlobalContext = React.createContext();

function Storage({ children }) {
  const [cart, setCart] = React.useState([]);
  const [notification, setNotification] = React.useState(null);
  const notificationRef = React.useRef();

  React.useEffect(() => {
    clearTimeout(notificationRef.current);
    notificationRef.current = setTimeout(() => setNotification(null), 2000);
  }, [notification]);

  return (
    <GlobalContext.Provider value={{ cartCounter: cart.length, notification }}>
      <button onClick={() => setNotification(<p>Notificação</p>)}></button>
      {children}
    </GlobalContext.Provider>
  );
}

export default Storage;
