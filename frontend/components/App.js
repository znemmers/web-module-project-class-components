import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, 
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Eat Cookies',
    id: 1528817084368,
    completed: false
  }
]


export default class App extends React.Component {
constructor(){
  super();
  this.state = {
   todos
  }
}

handleClear = () => {
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => {
      return (todo.completed === false)
    })
  })

}

handleToggle = (clickedId) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedId){
        return {
          ...todo,
          completed: !todo.completed
        }
      }return todo;
    })
  })
}

handleAdd = (name) => {
  const newTodo = {
    name: name,
    id: Date.now(),
    completed: false
  }

  this.setState({
    ...this.state,
    todos: [...this.state.todos, newTodo]
  })
}

  render() {
    const {todos} = this.state
    return (
      <div>
        <h1>Todos</h1>
          <TodoList handleToggle={this.handleToggle} todos={todos}/>
          <Form handleAdd={this.handleAdd}/>
          
          <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
