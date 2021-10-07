export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add-item':
      const todoUp = [action.item, ...state.todo.list];
      return { ...state, todo: {list: todoUp, item: {}} }
    default:
      return state;
    case 'delete-todo':
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, todo: {list: listUpdate, item: {}} }
  }
}