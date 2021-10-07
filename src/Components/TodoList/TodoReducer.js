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
    case 'add-task':
      const todoList = state.todo.list;
      const todoUpdated = todoList.filter(todo => {
        if(todo.id===action.item.idTodo){
          console.log(todo);
          todo.tasks = [action.item, ...todo.tasks];
          return todo;
        }
        return todo;
        });
      return { ...state, todo: {list: todoUpdated, item: {}} }
  }
}