import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  quoted = new Quote(0, "", "", "", "", new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
    this.add.emit(this.quoted);
    this.quoted = new Quote(0, "", "", "", "", new Date(),0,0)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
