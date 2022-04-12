import { Quote } from '../quote';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  // addNewQuote(Quote:any) {
       
  //   this.quotes.push(Quote)
  // }

  
  newPost=new Quote(0, "", "", "", new Date())
@Output()addquote=new EventEmitter <Quote>();
quoteSubmit(){
  this.addquote.emit(this.newPost );
}
  constructor() { }

  ngOnInit(): void {
  }

}
