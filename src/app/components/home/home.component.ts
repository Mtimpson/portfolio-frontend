import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angularTests';
  list = ['Software Engineer.', 'Builder.', 'Creator.', 'Digital Architect.', 'Computer Scientist.',
    'Full Stack Developer.', 'Lover of Tech.', 'Problem Solver.', 'Leader', 'Out of the Box Thinker.', 'Communicator']

  constructor() { }

  ngOnInit(): void {
  }

}
