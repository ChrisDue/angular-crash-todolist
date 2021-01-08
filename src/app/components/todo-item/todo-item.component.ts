import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;

  constructor(private todoService: TodoService) { }

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
    // Toggle in UI
    console.log('toggle');
    todo.completed = !todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo) {
    console.log('delete');
  }

}
