import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    // you will need a place to store your state in this component.
    constructor () {
        super();
        this.state = {
            todoList: []
        };
    }

    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    addTodoItem = item => {
        const newItem = {
            name: item,
            id: Date.now(),
            completed: false
        };
        this.setState({
            todoList: [...this.state.todoList, newItem]
        });
    };

    handleCompletedChange = id => {
        const change = this.state.todoList.map(task => {
            if (id === task.id) {
                task.completed = !task.completed;
            }
            return task;
        });
        this.setState({todoList: change});
    };

    clearCompletedTasks = () => {
        const todoFilter = this.state.todoList.filter(task => task.completed === false);
        this.setState({todoList: todoFilter});
    };

    render () {
        return (
            <div>
                <TodoForm
                    clearCompletedTasks={this.clearCompletedTasks}
                    addTodoItem={this.addTodoItem}
                />
                <h2>Welcome to your Todo App!</h2>
                <TodoList
                    handleCompletedChange={this.handleCompletedChange}
                    todoList={this.state.todoList}
                />
            </div>
        );
    }
}

export default App;
