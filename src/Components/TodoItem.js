import React from 'react'

class TodoItem extends React.Component {
  delete = () => {
    const { onDelete, todo } = this.props
    onDelete(todo.id)
  }
  setIsEdit = () => {
    const { todo, editText } = this.props    
    editText( true, todo )
  }
  render() {
    const { todo } = this.props
    return (
      <div key={todo.id}>
        <li className='item'>
          <p> {todo.text}</p>
          <button className='button-edit' onClick={this.setIsEdit}>Edit</button>
          <button className='buttonX' onClick={this.delete}>X</button>
        </li>
      </div>
    )
  }
}

export default TodoItem