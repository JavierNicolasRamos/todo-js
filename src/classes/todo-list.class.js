import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorgae();
    }

     eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorgae();
     }

     marcarCompletado(id){
        for( const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorgae();
                break;
            }
        }
     }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorgae();
    }

    guardarLocalStorgae(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        if(localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
        }
        else{
            this.todos = [];
        }

        this.todos = this.todos.map(Todo.fromJson);
    }
}