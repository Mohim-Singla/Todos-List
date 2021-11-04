import './App.css';
import { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initialTodo;
  if (localStorage.getItem("todos") === null) {
    initialTodo = [];
  }
  else {
    initialTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initialTodo)
  const onDelete = (todo) => {
    setTodos(todos.filter((element) => {
      return element !== todo;
    }))
  };
  const addTodo = (title, desc) => {
    let sno = 0;
    todos.length ? sno = todos[todos.length - 1].sno + 1 : sno = 0;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);

  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos.length) {
      document.title = `Todos-List (${todos.length})`;
    }
    else {
      document.title = `Todos-List`;
    }
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todo={todos} onDelete={onDelete} />
                </>
              )
            }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
