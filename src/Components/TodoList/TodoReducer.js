export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add-item':
      const todoUp = [action.item, ...state.todo.list];
      return { ...state, todo: {list: todoUp, item: {}} }
    default:
      return state;
  }
}