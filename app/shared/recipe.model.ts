import { shopping_model } from './shopping.model';

export class recipe {
public name: string;
public description: string;
public imgURL : string;
public ingredients: shopping_model[];

constructor(name: string, desc: string, URL: string, ingredient: shopping_model[]){

    this.name = name;
    this.description = desc;
    this.imgURL = URL;
    this.ingredients = ingredient;
}

}