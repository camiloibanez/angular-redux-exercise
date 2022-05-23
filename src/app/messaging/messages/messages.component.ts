import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { DECREMENT, INCREMENT } from '../messaging-actions';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @select(['messaging', 'newMessages']) newMessages: any;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  increment() { 
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() { 
    this.ngRedux.dispatch({ type: DECREMENT });
  }

}
