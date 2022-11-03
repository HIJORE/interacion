import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  objects:any;

  constructor(public service:DataService,private route:Router) { }

  ngOnInit(): void {
   this.service.dataForAdmin().subscribe(data=>{
      console.log(data);
      this.objects=data;

   })
  }
  goToAdminSave(adminObj:any){
    this.route.navigate(['secondmodulesave']);
    this.service.adminObj=adminObj;

  }

}
