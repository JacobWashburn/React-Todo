import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';

const TasksWrapper = styled.div`

`;

const TodoList = props => {
    return (
        <TasksWrapper>
            {props.todoList.map(task =>
                <Todo
                    key={task.id}
                    handleCompletedChange={props.handleCompletedChange}
                    task={task}
                />
            )}
        </TasksWrapper>
    );
};

export default TodoList;
