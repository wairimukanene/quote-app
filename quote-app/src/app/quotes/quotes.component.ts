import { Component, OnInit } from '@angular/core';
import {Quote} from '/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  //quotes array
  quotes:Quote[] =[
    new Quote(1,'Dont stop Until you are proud','Myle Cyrus','Wairimu Kanene',new Date(2022,2,25)0,0),
    new Quote(2,'Always be kind because everyone is fighting battles that we dont know about','Oprah Winfred','Margaret Mbaire',new Date(2021,5,7)1,2),
    new Quote(3,'Music is better than people because it always stays when everyone leaves','Justin Bieber','Brian Muchiri'),new Date(2022,3,29)3,4),
    new Quote(4,'And when the sunrise we try again','Mandela Ndiba','Nancy Naisoi')new Date(2022,4,5)4,5),
    new Quote(5,'Life is hard you always have to choose a struggle.Pick a poison','Michael Todd','Sophia Kerubo')new Date(2022,5,19)6,7),
    new Quote(6,'Good things are coming be happy and stay happy','Annet Smith','Rita Njuguna')new Date(2022,6,8)8,9),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
