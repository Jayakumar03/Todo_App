import "../css/todolist.css"
export const TodoListRender = (props) => {

function deleteTodo(todo) {
    console.log(todo)
    const updatedTodos = props.todosList.filter((item) =>  { return item.id !== todo.id});
    console.log(
    props.setTodos(updatedTodos));

    
}


function updateTodo(todo) {
    console.log(todo);
    const updatedValue = prompt();
  
    const updatedTodos = props.todoList.map((item) => {
      console.log(item.task);
      if (item.id === todo.id) {
        return { ...item, task: updatedValue };
      }
      return item;
    });
  
    props.setTodos(updatedTodos);
  }

    

    return (
      <>
        <ul id="todolist-container">
          {props.todosList.map((todo) => (
            <li id={todo.id} key={todo.id}  className="indivual-todo">
              <label htmlFor={`checkbox-${todo.id}`}>
                <input type="checkbox" id={`checkbox-${todo.id}`} className="checkbox" />
                {todo.task}
              </label>
              <button onClick={ () => updateTodo(todo)}><i className="fa-solid fa-pen-to-square"></i></button>
              <button onClick={ () => deleteTodo(todo)} ><i className="fa-solid fa-trash"></i></button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  