import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic Classes 
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed // only add this class, if...
    }
    return classes;
  }

  onToggle(todo: Todo) {
    console.log('toggle');
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {
    console.log('delete');
  }

}
