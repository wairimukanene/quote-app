import { Component,EventEmitter,Input, OnInit ,Output} from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input () quote:Quote;
  @Output() isComplete = new EventEmitter <boolean>();
  
  quoteDone(done:boolean){
    this.isComplete.emit(done)
  };
  // upvote(){
  //   this.quote.thumbsUp+=1;
  // }
  // downvote(){
  //   this.quote.thumbsDown+=1;
  // }
  constructor() { }

  

  ngOnInit(): void {
  }

}
