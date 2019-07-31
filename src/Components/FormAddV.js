import React, { Component } from 'react';
import TodoItem from './TodoItem'

class FormAdd extends Component {
  render() {
    const { addTodo, onChangeText, text, todoList, deleteTodo, clearAll } = this.props
    const { textEdit, isEdit, edit, onChangeTextEdit, cancelEdit, saveEdit } = this.props
    return (
      <div><br></br><br></br>
        <input type='text' onChange={onChangeText}
          value={text}
        /> <br></br>
        <li>
          <button onClick={addTodo}>Add</button>
          <button onClick={clearAll}>Clear All</button>
        </li>

        <h4>To Do List: </h4>
        {
          todoList.length > 0 &&
          todoList.map((todo) =>
            <TodoItem key={todo.id}
              onDelete={deleteTodo} todo={todo} editText={edit} />
          )
        }
        {
          isEdit &&
          <li className='item'>
            <input className='input-edit' type='text'
              value={textEdit}
              onChange={onChangeTextEdit}
            />
            <button className='button-save' onClick={saveEdit}>Save</button>
            <button className='button-cancel' onClick={cancelEdit}>Cancel</button>
          </li>
        }
      </div>
    )
  }
}

export default FormAdd