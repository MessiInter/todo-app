import { Component } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { TodoInterface } from '../../shared/todo/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  constructor(private todoService: TodoService) { }
  
  todos: TodoInterface[] = []
  todoTitle: string = ''
  
  formSubmit(): void {
    this.todoService.addTodo(this.todos, this.todoTitle);
    this.todoTitle = '';
  }
  deleteHandle(index: number): void {
    this.todoService.removeTodo(this.todos, index);
  }
  updateHandle(index: number) {
    const newStatus: boolean = !this.todos[index].isDone;
    this.todoService.updateStatus(this.todos, index, newStatus);
  }
}
