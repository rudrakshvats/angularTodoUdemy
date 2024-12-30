import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  // creating a class with parameters below and their datatypes
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  // todos = [
  //   new Todo(1, 'Learn Angular', false, new Date()), // declaring objects with parameterised contructor approach just like Java
  //   new Todo(2, 'Become good anngular developer', false, new Date()),
  //   new Todo(3, 'Visit Santiago Bernabeu Stadium in Madrid', false, new Date()),
  //   // { id: 1, description: 'Learn Angular' },
  //   // { id: 2, description: 'Become good anngular developer' },
  //   // { id: 3, description: 'Visit Santiago Bernabeu Stadium in Madrid' },
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn Angular',
  // };
  todos: Todo[] = [];

  constructor(public todoDataService: TodoDataService) {}

  ngOnInit() {
    this.todoDataService.retrieveAllTodos('Rudraksh').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
}
