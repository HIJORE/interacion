import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import{delay, finalize} from 'rxjs/operators'
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    //alert();
    return next.handle(request).pipe(delay(3000),
    
    finalize(() =>this.loaderService.hide()),
    
    );
  }
}
