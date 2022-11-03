import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  adminObj:any;
  constructor(public service:DataService) { }

  ngOnInit(): void {
    this.adminObj=this.service.adminObj;
  }

}
