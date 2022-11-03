import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  homeObj:any;
  adminObj:any;

  constructor(private http:HttpClient) { }
 public url:string="https://jsonplaceholder.typicode.com/posts";
 public url1:string="https://jsonplaceholder.typicode.com/users";
 //public url:string="http://192.168.0.146:8089";
  dataForHome(){
    return this.http.get(this.url);
  }
  dataForAdmin(){
    return this.http.get(this.url1)
  }
}


