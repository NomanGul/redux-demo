import React from "react"
import { connect } from "react-redux"
import { deleteTodo } from "./store/actions"

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.items.map(item => (
          <li key={item.id} onClick={() => props.onDelete(item.id)}>
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.todoReducer.items
})

const mapDispatchToProps = {
  onDelete: id => deleteTodo(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
