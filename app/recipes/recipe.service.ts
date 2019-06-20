import { Injectable, EventEmitter } from '@angular/core';
import { recipe } from '../shared/recipe.model';
import { shopping_model } from '../shared/shopping.model';
import { shoppinglistService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<recipe[]>();

  private recipes: recipe[] = [
    new recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new shopping_model('Meat', 1),
        new shopping_model('French Fries', 20)
      ]),
    new recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new shopping_model('Buns', 2),
        new shopping_model('Meat', 1)
      ])
  ];

  constructor(private SLservice:shoppinglistService){}

getRecipe(){

   return this.recipes.slice();
}

ongetRecipeID(index: number){
return this.recipes[index];

}

addRecipe(newRecipe: recipe){
this.recipes.push(newRecipe);
this.recipeSelected.next(this.recipes.slice());
}

updateRecipe(index:number, recipeEdit:recipe){
this.recipes[index] = recipeEdit;
this.recipeSelected.next(this.recipes.slice());

}



recipeDelete(index:number){
this.recipes.splice(index, 1);
this.recipeSelected.next(this.recipes.slice());
  
}

onrecipeIngredient(ingredients:shopping_model[]){
this.SLservice.AddIngredients(ingredients);

}

}