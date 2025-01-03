import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(public httpClient: HttpClient) {}

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos`
    );
    //console.log('Execute Hello World Bean Service');
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`
    );
  }

  updateTodo(username: string, id: number, todo: Todo) {
    return this.httpClient.put(
      `${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(
      `${TODO_JPA_API_URL}/users/${username}/todos`,
      todo
    );
  }
}
