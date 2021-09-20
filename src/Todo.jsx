import React from "react";
import TodoStore from "./stores/TodoStore";
import TodoContent from "./TodoContent"
import * as TodoActions from "./actions/TodoActions";


export default class Todo extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  componentDidMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll()
      });
    });
  }

  createTodo() {
    TodoActions.createTodo("New Todo");
  }

  render() {
    const TodoContents = this.state.todos.map((todo) => {
      return <TodoContent {...todo}/>
    })

    return(
      <div>
        <h1>TodoList</h1>
          <button onClick={this.createTodo.bind(this)}>Create!</button>
        <ul>{TodoContents}</ul>
      </div>
    )
  }
}
