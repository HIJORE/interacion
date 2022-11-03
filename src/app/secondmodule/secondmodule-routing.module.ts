import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondmoduleComponent } from './secondmodule.component';
import { AdminComponent } from './admin/admin.component';
import { SaveComponent } from './save/save.component';


const routes: Routes = [
  {
     path:"secondmodule",component:SecondmoduleComponent,children:[
       { path:"admin",component:AdminComponent },
       { path:"save",component:SaveComponent},
     ]
   }
 ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondmoduleRoutingModule { }
