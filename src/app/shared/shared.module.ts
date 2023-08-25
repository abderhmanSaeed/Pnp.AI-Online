import { FilterPipe } from './pipes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlMessagesComponent } from './components/list/control-messages/control-messages.component';
import { SpinnerComponent } from './components/list/spinner/spinner.component';


@NgModule({
  declarations: [ControlMessagesComponent, SpinnerComponent ,FilterPipe],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlMessagesComponent,
    SpinnerComponent,
    FilterPipe
  ]
})
export class SharedModule { }
