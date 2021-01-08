import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  // initialize services in constructor
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // like "await Promise".then(...)
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}
