import { ElementType } from './element-type';
import { ElementsService } from './elements.service';

export class Element {
    
    name : string;
    symbol : string;
    atomicNumber: number;
    atomicMass: number;
    groupBlock : string;
    groupClass : string;
    Custom : boolean = false;

    constructor(name,symbol,atomicNumber, atomicMass, groupBlock, custom? : boolean){
        this.name = name;
        this.symbol = symbol;
        this.atomicNumber = atomicNumber;
        this.atomicMass = atomicMass;
        this.groupBlock = groupBlock;

        this.Custom = custom;
        this.groupClass = this.groupBlock.replace(/ /g, '-');
    }
}
