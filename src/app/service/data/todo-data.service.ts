import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(public httpClient: HttpClient) {}

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(
      `http://localhost:8081/users/${username}/todos`
    );
    //console.log('Execute Hello World Bean Service');
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(
      `http://localhost:8081/users/${username}/todos/${id}`
    );
  }
}
