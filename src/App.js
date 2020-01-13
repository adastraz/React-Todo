import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './components/TodoComponents/Todo.css'

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todoList: []
    }
  }
  toggleItem = id => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }else{
          return item
        }
      })
    })
  }
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState ({
      todoList: [...this.state.todoList, newItem]
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>ToDo List</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList 
        todos={this.state.todoList} 
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
