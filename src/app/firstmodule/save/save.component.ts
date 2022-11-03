import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  homeObj:any;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.homeObj=this.service.homeObj
    console.log(this.homeObj);
  }

}
