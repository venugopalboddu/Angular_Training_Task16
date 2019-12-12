import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  localData: any;
  listfields: any;

  constructor(private s: DataService) { }

  ngOnInit() {
    this.getDetails();
  }
  getDetails() {
    this.s.ge().subscribe((res) => {
      console.log("datadddd", res);
      this.localData = res;
      this.listfields = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    });
  }

}

