import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';

import{HttpClientModule} from '@angular/common/http'

import { SecondmoduleModule } from './secondmodule/secondmodule.module';
import { DataService } from './data.service';

import { RouterModule,RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoaderComponent,
    
   
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,MatProgressSpinnerModule,FormsModule,
    AppRoutingModule,FirstmoduleModule,SecondmoduleModule,RouterModule,HttpClientModule,RouterOutlet, BrowserAnimationsModule
  ],
  providers: [DataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
