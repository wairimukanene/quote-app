import { Quote } from '../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newPost=new Quote(0, "", "", "", new Date())
  @Output () addedQuote = new EventEmitter<Quote>();

  quoteSubmit() {
    this.addedQuote.emit(this.newPost);
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
