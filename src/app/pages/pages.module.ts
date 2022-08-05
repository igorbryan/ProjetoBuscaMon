import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Module
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule 
  ]
})
export class PagesModule { }
