import React from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

const Input = styled.input`

`;

const Button = styled.button`

`;

class TodoForm extends React.Component {
    constructor () {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({newItem: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoItem(this.state.newItem);
        this.setState({newItem: ''});
    };

    render () {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input required type='text' name='item' onChange={this.handleChanges} value={this.state.newItem}/>
                    <Button>Add Task</Button>
                </Form>
                < Button
                    onClick={this.props.clearCompletedTasks}
                > Clear Completed Tasks </Button>
            </div>


        );
    }
}

export default TodoForm;