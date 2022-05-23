import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { CLEAR_TODOS } from '../tasking-actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select((s: IAppState) => s.tasking.todos.length) todosLength?: any;
  @select(['tasking', 'lastUpdate']) lastUpdate?: any;

  constructor(private ngRedux: NgRedux<IAppState>) { 
    
  }

  ngOnInit(): void {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
