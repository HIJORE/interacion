import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstmoduleComponent } from './firstmodule/firstmodule.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'firstmoduleh',redirectTo:'firstmodule/home',pathMatch:'full' },
  {path:'secondmodulea',redirectTo:'secondmodule/admin',pathMatch:'full'},
  {path:'firstmodulesave',redirectTo:'firstmodule/save',pathMatch:'full'},
  {path:'secondmodulesave',redirectTo:'secondmodule/save',pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
