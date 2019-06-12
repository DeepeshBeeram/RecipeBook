import { Injectable, EventEmitter } from '@angular/core';
import { shopping_model } from '../shared/shopping.model';

@Injectable()
export class shoppinglistService{
    ingredientsChanged = new EventEmitter<shopping_model[]>();
  private ingredients: shopping_model[]  = [
        new shopping_model('Apple', 5),
        
        new shopping_model('Oranges', 5),
        
          ];

getIngredients(){

    return this.ingredients.slice();
    }

    addIngredientClick(ingredients:shopping_model){

        this.ingredients.push(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    AddIngredients(ingredients:shopping_model[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

    }

}