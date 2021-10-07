import { types } from "../../types/types";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const todoUp = [action.item, ...state.todo.list];
      return { ...state, todo: {list: todoUp, item: {}} }
    case types.DELETE_TODO:
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, todo: {list: listUpdate, item: {}} }
    case types.ADD_TASK:
      const todoList = state.todo.list;
      const todoUpdated = todoList.filter(todo => {
        if(todo.id===action.item.idTodo){
          todo.tasks = [action.item, ...todo.tasks];
          return todo;
        }
        return todo;
      });
      return { ...state, todo: {list: todoUpdated, item: {}} }
    case types.UPDATE_ITEM:
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        const tasks = item.tasks.map(el=>{
          if (el.id === action.item.id) {
          return action.item;
        }
        return el;
        });
        item.tasks=tasks;
        return item;
      });
      return { ...state, todo: {list: listUpdateEdit, item: {}} }
    case types.DELETE_TASK:
      const todoUpDeleteT = state.todo;
      const listUpdateT = todoUpDeleteT.list.map((item) => {
        let tasks = item.tasks.filter(el => {
          return el.id !== action.id;
        });
        item.tasks=tasks;
        return item;
      });
      return { ...state, todo: {list: listUpdateT, item: {}} }
    case types.EDIT_ITEM:
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit }
    case types.CANCEL_EDIT:
      const todoCancel = state.todo;
      todoCancel.item = action.item;
      return { ...state, todo: todoCancel }
    default:
      return state;
  }
}