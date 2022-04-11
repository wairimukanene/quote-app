import { Component,EventEmitter,Input, OnInit ,Output} from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input () quote:Quote;
  @Output() deleteQuote = new EventEmitter <boolean>();
  quoteDelete(deleteyes:boolean){
    this.deleteQuote.emit(deleteyes);
  }

  constructor() { }

  upvote(){
    this.quote.upvotes++;
  }
  downvote(){
    this.quote.downvotes++;
  }

  ngOnInit(): void {
  }

}
