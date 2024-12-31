import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;

  constructor(
    public todoDataService: TodoDataService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (-1 != this.id) {
      this.todoDataService
        .retrieveTodo('Rudraksh', this.id)
        .subscribe((data) => {
          this.todo = data;
        });
    }
  }

  saveTodo() {
    if (-1 == this.id) {
      this.todoDataService
        .updateTodo('Rudraksh', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    } else {
      this.todoDataService
        .updateTodo('Rudraksh', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
