import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Brenda", "Moran", "bmoran@gmail.com", 2345667),
    new SalesPerson("Thor", "DaVinci","tdavinci@gmail.com", 120000),
    new SalesPerson("Loki", "Gray", "Lokis@gmail.com", 99999),
    new SalesPerson("Miata", "Pink", "superpink@gmail.com", 10000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
