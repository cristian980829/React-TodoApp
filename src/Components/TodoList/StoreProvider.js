import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from './TodoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || { list: [], item: {} };
}

const initialState = {
  todo: init()
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}