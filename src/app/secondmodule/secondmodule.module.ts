import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SaveComponent } from './save/save.component';
import { SecondmoduleComponent } from './secondmodule.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    SaveComponent,
    SecondmoduleComponent
  ],
  imports: [
    CommonModule,RouterOutlet,FormsModule
  ]
})
export class SecondmoduleModule { }
