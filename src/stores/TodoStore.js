import {EventEmitter} from"events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [
        { id: 1,
          text: "test1"
        },
        { id: 2,
          text: "test2"
        }
    ]
  }
  getAll(){
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
    }
  }

  createTodo(text){
    const id = Date.now();
    this.todos.push(
      {
        id: id,
        text: text
      }
    );
      this.emit("change")
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
