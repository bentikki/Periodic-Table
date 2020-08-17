import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElementComponent implements OnInit {

  @Input() element : Element;

  constructor(){
  }

  ngOnInit() {
  }

  onHover(){
    console.log(this.element.Custom);
  }
  
}
