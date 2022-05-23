import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../tasking-actions';
import { IAppState } from '../../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { 
    
  }

  ngOnInit(): void {
  }

  addTodo(input: HTMLInputElement) {
    if(!input.value) return;

    this.ngRedux.dispatch({ type: ADD_TODO, value: input.value });

    input.value = '';
  }

  toggleTodo(todo: any) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, todo: todo});
  }

  removeTodo(todo: any) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, todo: todo});
  }

  getTodos() {
    return this.ngRedux.getState().tasking.todos;
  }
}
