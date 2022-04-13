import { Component,EventEmitter,Input, OnInit ,Output} from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input () quote:Quote;
  thumbsUp = 0;
  thumbsDown = 0;
  @Output() isComplete = new EventEmitter <boolean>();
  
  quoteDone(done:boolean){
    this.isComplete.emit(done)
  };
  upvote(){
    this.thumbsUp++;
  }
  downvote(){
    this.thumbsDown++;
  }
  constructor() { }

  

  ngOnInit(): void {
  }

}
