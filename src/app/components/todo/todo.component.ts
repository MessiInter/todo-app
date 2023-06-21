import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { TodoInterface } from '../../shared/todo/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
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
  
  updateHandle(index: number, status: boolean) {
    this.todoService.updateStatus(this.todos, index, status);
  }
  
  ngOnInit(): void {
    const savedTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(savedTodos as string) || [];
  }
}
