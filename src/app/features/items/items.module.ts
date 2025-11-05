import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ItemsModule {}
