import React from 'react'

export const GlobalStorage = React.createContext();

function Storage({children}) {
  return (
    <GlobalStorage.Provider>
      {children}
    </GlobalStorage.Provider>
  )
}

export default Storage
