export class ElementType {

    public Name: string;
    public Color: string;

    // private _name: string;
    // private _color: string;

    // public get name(): string {
    //     return this._name;
    // }
    // public get color(): string {
    //     return this._color;
    // }
    
    constructor(name? : string, color? : string){
        this.Name = name;
        this.Color = color;
    }

}
