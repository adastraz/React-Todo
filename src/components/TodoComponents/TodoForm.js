import React, { Component } from 'react'


class TodoForm extends Component {
    constructor (){ 
        super()
        this.state = {
            todoText: ''
        }
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSumbit = e => {
        e.preventDefault()
        this.props.addItem(this.state.todoText)
    }
    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input
                type = 'text'
                name = 'item'
                value = {this.state.todoText}
                onChange = {this.handleChanges}
                />
                <button>Add</button>
            </form>

        )
    }
}

export default TodoForm