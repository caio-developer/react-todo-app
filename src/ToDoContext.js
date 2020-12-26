import React, {useState} from 'react'

export const ToDoContext = React.createContext();

export default function ToDoContextProvider({children}) {
  
  return (
    <ToDoContext.Provider>
      {children}
    </ToDoContext.Provider>
  )
}