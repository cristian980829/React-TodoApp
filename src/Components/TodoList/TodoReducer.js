export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'add-item':
      const todoUp = [action.item, ...state.todo.list];
      return { ...state, todo: {list: todoUp, item: {}} }
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
    case 'update-item':
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
    case 'delete-task':
      const todoUpDeleteT = state.todo;
      const listUpdateT = todoUpDeleteT.list.map((item) => {
        let tasks = item.tasks.filter(el => {
          return el.id !== action.id;
        });
        item.tasks=tasks;
        return item;
      });
      return { ...state, todo: {list: listUpdateT, item: {}} }
    default:
      return state;
  }
}