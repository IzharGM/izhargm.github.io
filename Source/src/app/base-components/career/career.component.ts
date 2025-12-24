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
      description: 'Manages the payload, gimbal, and frame subteam (6 members) at UCR\'s drone club.',
      skills: ['SolidWorks', '3D Printing', "Simulation"],
      image: 'assets/timeline-images/aviatr.jpg',
    },
    {
      title: 'Associate Engineer',
      company: 'FSAE Highlander Racing',
      link: 'https://www.highlanderracing.org/index.html',
      date: 'Sep 2023 - Sep 2025',
      description: 'Researched, designed, and manufactured a push bar and custom car stands.',
      skills: ['Welding', 'Handheld Tool Operation', 'Solidworks', '3D Printing'],
      image: 'assets/timeline-images/hr.png',
    },
    {
      title: 'Assistant Fabricator',
      company: 'Unlimited Plastics',
      link: 'https://unlimitedplastics.com/',
      date: 'Jun 2019 - Nov 2024',
      description: 'Assisted under the supervision of a professional fabricator in the production of custom machinery.',
      skills: ['Welding', 'Handheld Tool Operation', 'Forklift Operation'],
      image: 'assets/timeline-images/unlimited_plastics.png',
    },
  ]

}