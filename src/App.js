import React from 'react';
import Storage from './GlobalContext';
import './style.css';
import Header from './components/Header';
import Options from './components/Options';

function App() {
  const [itemList, setItemList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(response => response.json());

      setItemList(response);
    })();
  }, []);

  return (
    <Storage>
      {/* Header */}
      <Header />
      {/* Option List */}
      <Options items={itemList} />
      {/* Product Viewer */}

      {/* Cart */}

      {/* Buy Page */}
    </Storage>
  );
}

export default App;
