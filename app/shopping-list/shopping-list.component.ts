import { Component, OnInit } from '@angular/core';
import { shopping_model } from '../shared/shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: shopping_model[] = [
new shopping_model('Apple', 5),

new shopping_model('Oranges', 5),

  ];



  addIngredients(newIngredient:shopping_model){

    this.ingredients.push(newIngredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
