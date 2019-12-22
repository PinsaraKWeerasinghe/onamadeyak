import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  december: string;
  january: string;
  february:string;
  march:string;
  april:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pinsara',december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 2, name: 'Upeka', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 3, name: 'Nuraj', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 4, name: 'Akila', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 5, name: 'Dhana', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 6, name: 'Uditha', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 7, name: 'Chappe', december:"-", january: "-", february: '-',march:"-",april:"-"},
  {position: 8, name: 'Nuwan', december:"-", january: "-", february: '-',march:"-",april:"-"},

];

@Component({
  selector: 'app-boarding-fees',
  templateUrl: './boarding-fees.component.html',
  styleUrls: ['./boarding-fees.component.scss']
})
export class BOARDINGFEESComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'december', 'january','february','march','april'];
  dataSource = ELEMENT_DATA;

}
