import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map}  from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //name="hijore";
   private _customerName!: string;
    get customerName(){
      return this._customerName;
    }
    set customerName(name:string){
       this._customerName=name;
    }
    imageUrl:string="https://picsum.photo/200";
    count=0;
    incrementCount(){
      this.count +=1;
    }
    userName: string | undefined;
    updateValue(name:any){
       this.userName=name;
       if(name==="hijore"){
        alert("hi hijore");

       }

       
    }
    
  //url = 'https://jsonplaceholder.typicode.com/users';
 // users:any;
 // constructor(private http:HttpClient){}

  // getData(){
  //   this.http.get(this.url).subscribe(data =>{
  //     this.users = data;
  //   })
  // }
}
