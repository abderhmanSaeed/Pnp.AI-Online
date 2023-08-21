import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes';



@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterPipe]
})
export class ShardModule { }
