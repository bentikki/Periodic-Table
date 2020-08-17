import { Injectable } from '@angular/core';
import { ElementType } from './element-type';
import { Element } from './element';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  // public ElementTypes = [
  //   new ElementType('nonmetal', 'ffdd59'),
  //   new ElementType('alkaline earth metal', 'ffa801'),
  //   new ElementType('alkali metal', 'ffc048'),
  //   new ElementType('noble gas', 'be2edd'),
  //   new ElementType('transition metal', '686de0'),
  //   new ElementType('halogen', '686de0'),
  //   new ElementType('post-transition metal', '30336b'),
  //   new ElementType('lanthanoid', 'eb4d4b'),
  //   new ElementType('metal', '535c68'),
  //   new ElementType('metalloid', '95afc0'),
  //   new ElementType('actinoid', '6ab04c'),
  // ] 

  public Elements : Element[];
  public elementObjects : Array<Element>;
  // getType(name : string){
  //   return this.ElementTypes.find(x => x.Name = name);
  // }

  private apiUrl = 'https://neelpatel05.pythonanywhere.com/'; 

  constructor(private _httpClient? : HttpClient) { }

  private getElements() {
    return this._httpClient.get<Element[]>(this.apiUrl);
  }

  public getElementObjects() : Array<Element>{
    let elements : Array<Element> = [];
    this.getElements().subscribe(data => data.forEach(element => {
      elements.push(new Element(element.name, element.symbol, element.atomicNumber, element.atomicMass, element.groupBlock));
    }));

    this.elementObjects = elements;
    return elements;
  }

  public getSingleElement(id : number){

    // let ele = this.getElementObjects().find(x => x.atomicNumber == id);
    // return ele;
  }

}
