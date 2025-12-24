import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timeline = [
    {
      title: 'Mechanical Engineering Lead',
      company: 'Aviat\'r',
      link: 'https://aviatr.ucrhighlanders.org/',
      date: 'Nov 2024 - Present',
      description: 'Manages the computer vision and autonomous navigation subteams (6 members) at UCR\'s drone club.',
      skills: ['C++', 'Python'],
      image: 'assets/timeline-images/aviatr.jpg',
    }
  ]

}