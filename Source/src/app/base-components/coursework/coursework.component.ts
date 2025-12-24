import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursework',
  templateUrl: './coursework.component.html',
  styleUrls: ['./coursework.component.css']
})
export class CourseworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coursework = [
    'ME 100A - Thermodynamics',
    'ME 110 - Mechanics of Materials',
    'ME 116A - Heat Transfer',
    'ME 133 - Mechatronics',
    'ME 174 - Machine Design',
  ];
}
