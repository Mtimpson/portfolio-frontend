import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angularTests';
  list = ['software engineer.', 'builder of the web.', 'creator.', 'digital architect.', 'computer scientist.',
    'full stack developer.', 'lover of tech.', 'problem solver.', 'leader.',
    'coffee drinker.', 'mobile developer.']

  constructor() { }

  ngOnInit(): void {
  }

}
