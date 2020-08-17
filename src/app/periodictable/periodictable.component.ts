import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';
import { ElementType } from '../element-type';
import { Element } from '../element';

@Component({
  selector: 'app-periodictable',
  templateUrl: './periodictable.component.html',
  styleUrls: ['./periodictable.component.css']
})
export class PeriodictableComponent implements OnInit {


  LaLuCombination : Element;
  AcLrCombination : Element;
  elements : Element[] = [];

  constructor(private dataService : ElementsService){}

  ngOnInit() {
    // this.dataService.getElements().subscribe(data => this.elements = data);
    this.elements = this.dataService.getElementObjects();

    this.LaLuCombination = new Element('','La-Lu', '','','lanthanoid', true);
    this.AcLrCombination = new Element('','Ac-Lr', '','','actinoid', true);
  }

  getElementsByRange(start : number, end : number){
    return this.elements.filter(x => x.atomicNumber >= start && x.atomicNumber <= end);
  }

  sortBy(prop: string) {
    return this.elements.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
