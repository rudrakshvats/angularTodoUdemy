import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos = [
    { id: 1, description: 'Learn Angular' },
    { id: 2, description: 'Become good anngular developer' },
    { id: 3, description: 'Visit Santiago Bernabeu Stadium in Madrid' },
  ];
  // todo = {
  //   id: 1,
  //   description: 'Learn Angular',
  // };

  constructor() {}

  ngOnInit(): void {}
}
