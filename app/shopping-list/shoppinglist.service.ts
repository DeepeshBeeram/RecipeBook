import { Injectable } from '@angular/core';
import { shopping_model } from '../shared/shopping.model';
import { Subject } from 'rxjs';

@Injectable()
export class shoppinglistService{
    ingredientsChanged = new Subject<shopping_model[]>();
    startEditing = new Subject<number>();
  private ingredients: shopping_model[]  = [
        new shopping_model('Apple', 5),
        
        new shopping_model('Oranges', 5),
        
          ];

    getIngredients(){

    return this.ingredients.slice();
    }

    getIngredientByID(index:number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, editIngredient: shopping_model){
        this.ingredients[index] = editIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientClick(ingredients:shopping_model){

        this.ingredients.push(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    AddIngredients(ingredients:shopping_model[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    
}