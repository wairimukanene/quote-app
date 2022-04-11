export class Quote {
  id:number;
  quote:string;
  author:string;
  name:string;
  submissionDate:string;
  upvotes:number;
  downvotes:number;
  constructor(id:number,quote:string,author:string,name:string,submissionDate:Date,upvotes:number,downvotes:number)
  this.id=id;
  this.quote=quote;
  this.author=author;
  this.name=name;
  this.submissionDate=submissionDate;
  this.upvotes=upvotes;
  this.downvotes=downvotes;
}

