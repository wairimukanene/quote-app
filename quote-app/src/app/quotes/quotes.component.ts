import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  //quotes array
  quotes:Quote[] =[
    new Quote(1,'Dont stop Until you are proud','Myle Cyrus','Wairimu Kanene',0,1),
    new Quote(2,'Always be kind because everyone is fighting battles that we dont know about','Oprah Winfred','Margaret Mbaire',2,3),
    new Quote(3,'Music is better than people because it always stays when everyone leaves','Justin Bieber','Brian Muchiri',4,5),
    new Quote(4,'And when the sunrise we try again','Mandela Ndiba','Nancy Naisoi',5,6),
    new Quote(5,'Life is hard you always have to choose a struggle.Pick a poison','Michael Todd','Sophia Kerubo',7,8),
    new Quote(6,'Good things are coming be happy and stay happy','Annet Smith','Rita Njuguna',9,1),

  ]

  //function for adding a new quote
  addNewQuote(Quote:any) {
       
    this.quotes.push(Quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
