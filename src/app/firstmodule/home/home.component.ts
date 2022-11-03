import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datas:any;

  constructor(public service:DataService,private route:Router) { }

  ngOnInit(): void {
       this.service.dataForHome().subscribe(data =>{
        console.log(data);
        this.datas=data;
       })
  }
  goToHomeSave(homeObj:any){
    this.route.navigate(['firstmodulesave']);
    console.log(homeObj);
    this.service.homeObj=homeObj;
  }

}
