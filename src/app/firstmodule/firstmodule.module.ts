import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SaveComponent } from './save/save.component';
import { FirstmoduleComponent } from './firstmodule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstmoduleRoutingModule } from './firstmodule-routing.module';
import { SecondmoduleRoutingModule } from '../secondmodule/secondmodule-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    SaveComponent,
    FirstmoduleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,RouterOutlet,
    ReactiveFormsModule,
    FirstmoduleRoutingModule,
    SecondmoduleRoutingModule,
    
  ]
})
export class FirstmoduleModule { }
