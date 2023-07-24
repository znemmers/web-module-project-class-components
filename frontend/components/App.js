import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
          <ul>
            <li>Walk the dog</li>
            <li>Prep dinner</li>
            <li>Workout</li>
          </ul>
          <form>
            <input/>
            <button>Add</button>
          </form>
          <button>Hide Completed</button>
      </div>
    )
  }
}
