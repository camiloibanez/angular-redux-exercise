import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { NgReduxModule } from '@angular-redux/store';




@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    NgReduxModule
  ],
  exports: [MessagesComponent]
})
export class MessagingModule { }
