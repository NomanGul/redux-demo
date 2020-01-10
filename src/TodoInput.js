import React from "react"
import { connect } from "react-redux"
import { addTodo } from "./store/actions"

const TodoInput = props => {
  const [text, setText] = React.useState("")
  const onChangeTextHandler = event => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChangeTextHandler} />
      <button onClick={() => props.addTodo(text)}>Add</button>
    </div>
  )
}

const mapDispatchToProps = {
  addTodo: text => addTodo(text)
}

export default connect(null, mapDispatchToProps)(TodoInput)
