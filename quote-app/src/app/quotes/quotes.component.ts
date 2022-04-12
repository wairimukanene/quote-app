import { Component, OnInit ,Input} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quote:Quote;
thumbsUp=0;
thumbsDown=0;
  //quotes array
  quotes:Quote[] =[
    new Quote(1,'Dont stop Until you are proud','Myle Cyrus','Wairimu Kanene',new Date(2022,3,4),),
    new Quote(2,'Always be kind because everyone is fighting battles that we dont know about','Oprah Winfred','Margaret Mbaire',new Date(2022,6,2)),
    new Quote(3,'Music is better than people because it always stays when everyone leaves','Justin Bieber','Brian Muchiri',new Date(2022,8,12)),
    new Quote(4,'And when the sunrise we try again','Mandela Ndiba','Nancy Naisoi',new Date(2022,6,4)),
    new Quote(5,'Life is hard you always have to choose a struggle.Pick a poison','Michael Todd','Sophia Kerubo',new Date(2022,3,4)),
    new Quote(6,'Good things are coming be happy and stay happy','Annet Smith','Rita Njuguna',new Date(2022,7,4)),

  ]

  // function for adding a new quote
  addNewQuote(y:any) {
       let quoteslength=this.quotes.length;
       y.id=quoteslength+1;
       y.postedDate=new Date(y.postedDate)
    this.quotes.push(y)
     console.log(y.name);
    

   }

  

  deletequotes(isComplete:any, index:any){
   if (isComplete){
      let toDelete=confirm('Are you sure you want to delete')
      if (toDelete)
      this.quotes.splice(index,1);
    }
  }
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
