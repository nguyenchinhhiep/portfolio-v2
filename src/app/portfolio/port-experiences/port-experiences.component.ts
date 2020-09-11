import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-experiences',
  templateUrl: './port-experiences.component.html',
  styleUrls: ['./port-experiences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortExperiencesComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__experience section container';
  constructor() { }
  jobsList: Array<any>;
  ngOnInit(): void {
    this.jobsList = [
      {
        place: 'HVCG Software',
        position: 'Front-end Developer',
        time: 'June 2019 - Present',
        responsibilities: [
          'Take website design files from designers and convert them into HTML, JavaScript and CSS code.',
          'Collaborate with back-end developers to build web applications using Angular framework.',
          'Maintain and build features for outsourced projects (Angular 2+).'
        ]
      }
    ]
  }

}
