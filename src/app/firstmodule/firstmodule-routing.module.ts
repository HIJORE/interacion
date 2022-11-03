import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FirstmoduleComponent } from './firstmodule.component';
import { HomeComponent } from './home/home.component';

import { SaveComponent } from './save/save.component';

const routes: Routes = [
 {
    path: "firstmodule",component:FirstmoduleComponent,children:[
      { path:"home",component:HomeComponent },
      { path:"save",component:SaveComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstmoduleRoutingModule { }
