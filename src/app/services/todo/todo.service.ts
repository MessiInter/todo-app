import { Injectable } from '@angular/core';
import { TodoInterface } from '../../shared/todo/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  
  addTodo(arr: TodoInterface[], _title: string): void {
    if (_title.length !== 0) {
      arr.push({
        title: _title,
        isDone: false
      });
      this.saveTodo(arr);
    }
  }
  removeTodo(arr: TodoInterface[], index: number): void {
    if (index !== -1) {
      arr.splice(index, 1);
      this.saveTodo(arr);
    }
  }
  
  saveTodo(arr: TodoInterface[]): void {
    const todoData = JSON.stringify(arr);
    localStorage.setItem('todos', todoData as string);
  }
  
  updateStatus(arr: TodoInterface[], index: number, status: boolean): void {
    if (index !== -1) {
      let data = arr[index];
      data.isDone = status === data.isDone ? data.isDone : status;
      this.saveTodo(arr);
    }
  }
}
