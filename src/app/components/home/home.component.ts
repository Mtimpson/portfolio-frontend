import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public innerWidth: any;

  public list: string[] = ['creator.', 'developer.', 'leader.', 'thinker.', 'coder.', 'builder.', 'writer.', 'student.'];

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 900) {
      this.list = ['creator.', 'developer.', 'leader.', 'thinker.', 'coder.', 'builder.', 'writer.', 'student.']
    } else if (this.innerWidth >= 900) {
      this.list = ['software engineer.', 'builder of the web.', 'creator.', 'digital architect.', 'computer scientist.',
        'full stack developer.', 'lover of tech.', 'problem solver.', 'leader.',
        'coffee drinker.', 'mobile developer.']
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.onResize(event);
  }

}
