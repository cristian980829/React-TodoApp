import { useContext, useState } from "react";
import { TodoContext } from "../Components/TodoList/TodoContext";
import { types } from "../types/types";

export const useModal = (initialValue = false) => {
  
  const { dispatch } = useContext(TodoContext);

  const cancelEdit = () => dispatch({ type: types.CANCEL_EDIT, item: {} })

  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);

  const closeModal = () => {setIsOpen(false); cancelEdit();};

  return [isOpen, openModal, closeModal];
};
