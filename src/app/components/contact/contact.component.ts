import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
  })

  subjects = ['Custom Web App', 'Mobile App', 'Freelancing', 'Consulting', 'Recruiting', 'Other'];
  maxLengthError = 'The max length is ';

  constructor() { }

  onSubmit() {
    console.log(this.contactForm);
  }

  ngOnInit(): void {
  }

}
