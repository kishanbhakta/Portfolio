import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Figure out how to set up date function in typescript
  dateObj: Date = new Date();
  currentYear: number = this.dateObj.getFullYear();

  constructor() { }

  ngOnInit() {

  }

}
