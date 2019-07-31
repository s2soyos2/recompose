const initialState = {
    todoList: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'CLEAR_ALL':
            return {
                ...state,
                todoList: []
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload)
            }
        case 'EDIT_TODO':
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                    ((todo.id === action.payload.id) ? ({...todo, text: action.payload.textEdit }) : todo)
                )
            }
        default: return state;
    }
}