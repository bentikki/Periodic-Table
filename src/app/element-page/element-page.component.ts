import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Element } from '../element';
import { ElementsService } from '../elements.service';


@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.css']
})
export class ElementPageComponent implements OnInit {

  id: number;
  private sub: any;
  element : Element;
  elementObjects : Element[] = [];


  constructor(private route: ActivatedRoute, private dataService : ElementsService) 
  {
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = +params.get("id")
    })
    this.elementObjects = this.dataService.getElementObjects(); 
  }

  getElement(){

    this.element = this.elementObjects.find(i => i.atomicMass == 1);
    console.log(this.element);

    return true;
  }

}
