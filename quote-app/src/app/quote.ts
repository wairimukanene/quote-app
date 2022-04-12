export class Quote {
  showDetails:boolean;
  
  constructor(public id:number, public quote:string, public author:string,public name:string,public postedDate:Date, public thumbsUp:number,   public thumbsDown:number)  {
    this.showDetails=false;
  }
}
