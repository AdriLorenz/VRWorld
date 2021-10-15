import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: Contact;

  constructor() {
    this.contact = new Contact();
   }

  ngOnInit(): void {
  }

  submit() {
    window.location.reload();
  }
}
