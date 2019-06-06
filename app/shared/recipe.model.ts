export class recipe {
public name: string;
public description: string;
public imgURL : string;

constructor(name: string, desc: string, URL: string){

    this.name = name;
    this.description = desc;
    this.imgURL = URL;
}

}