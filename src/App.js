// import logo from './logo.svg';
import './App.css';
import React from "react";

// Todo component which will pass in todo and show text part
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"  style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>
        <img className='complete-btn' src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__340.png'/>
         </button>
        <button onClick={() => removeTodo(index)}><img className='complete-btn' src='https://cdn.pixabay.com/photo/2016/03/31/18/31/cancel-1294426_1280.png'/></button>
      </div>
    </div>
  );
};

// CREATE
function TodoForm({ addTodo }) {
  // The first is the “value” and
  //  the second is how you are going to be setting the state.
  // The state starts off empty, and as you add things to your state,
  //  it will add it to your list of to-do items.
  const [value, setValue] = React.useState("");
// handleSubmit variable that can
//  handle your addTodo function and 
// add the item to the list
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder = "Enter the task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {

  // READ PART
  // first parameter-what you are going to name ur state
  // second-what you are going to use to set the state
// below, hook has been used
  const[todos,setTodos]= React.useState([]);

  // CREATE
  // addTodo function
  // function will be able to grab the existing list of items,
  //  add on the new item, 
  // and display that new list.


  // TO CREATE NEW
  const addTodo = text => {
    // spread operator(...) copy the list  NS you are able to add on the new to-do item
    const newTodos = [...todos, { text }];
    // using the keyword that you set earlier, you will set the state with setTodos.
    setTodos(newTodos);
  };

  // TO MARK AS COMPLETE
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // DELETE
  const removeTodo = index => {
    // again use the spread operator, 
    // but once you grab that current list,
    //  you will be splicing the chosen index off of the array
    //  of items
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    // return new state by setting it with setTodos to be newTodos.
    setTodos(newTodos);
  };

  return (
    // creating list of items
    // able to create a new array of items by mapping over the todo items from state 
    // and displaying them by index.
    //  map of the todos to Todo components.

    <div className="app">
    <div className='title'>
      <h2> TO-DO LIST</h2>
    </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* Add this new TodoForm component to your App component: */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
