import React, {useState, useEffect} from 'react';
import todosData from "./todosData";
import Todo from "./Todo"
import './App.css';

const App = () => {
  const [todoLists, setTodoLists] = useState([]);

  //You can choose to view built in To Do data by uncommenting the state below and commening the on above
  // const [todoLists, setTodoLists] = useState(todosData);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    getLocalTodos()
  }, [])

   useEffect(()=>{
    saveLocalTodos()
  }, [todoLists])

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const getSearch = () => {
    setTodoLists([...todoLists, { text: search, id: todoLists.length + 1, completed: false }])
    setSearch("");
    return todoLists
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todoLists))
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodoLists(todoLocal);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h2>My To Do List</h2>
        <input type="text" placeholder="Title..." value={search} onChange={updateSearch}/>
        <span className="addBtn" type="submit" onClick={getSearch}>Add</span>
      </div>
      <ul>
        {todoLists.map(list => (
          <Todo key={list.id} todoLists={todoLists} text={list.text} list={list} setTodoLists={setTodoLists} />
        ))}
      </ul>
    </div>
  );
}

export default App;