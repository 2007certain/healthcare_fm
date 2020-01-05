import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  healthCareList = [
    {
      image: '../assets/health-care.jpg',
      name: 'Health Care Center 1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic sequi, similique quis vero quam? Voluptas ducimus aliquam consequuntur unde?'
    },
    {
      image: '../assets/health-care.jpg',
      name: 'Health Care Center 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic sequi, similique quis vero quam? Voluptas ducimus aliquam consequuntur unde?'
    },
    {
      image: '../assets/health-care.jpg',
      name: 'Health Care Center 3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic sequi, similique quis vero quam? Voluptas ducimus aliquam consequuntur unde?'
    },
    {
      image: '../assets/health-care.jpg',
      name: 'Health Care Center 4',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic sequi, similique quis vero quam? Voluptas ducimus aliquam consequuntur unde?'
    },
    {
      image: '../assets/health-care.jpg',
      name: 'Health Care Center 5',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius hic sequi, similique quis vero quam? Voluptas ducimus aliquam consequuntur unde?'
    }
  ];
  model: NgbDateStruct;
  date: { year: number, month: number };
  constructor(private calendar: NgbCalendar) { }
  procedures = [
    { label: "Botox", checked: false },
    { label: "Nutrition", checked: true },
    { label: "Contouring Transplant", checked: false },
    { label: "Fillers", checked: false },
    { label: "Laser", checked: false },
    { label: "Microdermabrasion", checked: false },
    { label: "Cosmetic", checked: false },
    { label: "Grafting", checked: false },
    { label: "Chemical Peels", checked: false }
  ]
  ngOnInit() {
    this.model = this.calendar.getToday();
  }

}
