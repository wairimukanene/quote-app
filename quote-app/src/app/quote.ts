export class Quote {
  showDetails:boolean;
  
  constructor(public id:number, public quote:string, public author:string,public name:string,public postedDate:Date, )  {
    this.showDetails=false;
  }
}
