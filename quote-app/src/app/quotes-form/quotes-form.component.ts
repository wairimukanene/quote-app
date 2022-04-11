import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newPost=new Quote(0, "", "", "", new Date(),0,0)

  constructor() { }

  ngOnInit(): void {
  }

}
