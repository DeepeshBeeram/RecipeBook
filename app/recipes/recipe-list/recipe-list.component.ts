import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelect = new EventEmitter<recipe>();

recipes: recipe[] = [

  new recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')


];

recipeSelectEL(RecipeItem:recipe){
this.recipeItemSelect.emit(RecipeItem);

}




  constructor() { }

  ngOnInit() {
  }

}
