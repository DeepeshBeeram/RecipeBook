import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { shopping_model } from 'src/app/shared/shopping.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {

recipes: recipe[];



  constructor(private recipeSer:RecipeService) { }

  ngOnInit() {

    this.recipes = this.recipeSer.getRecipe();
  }

}
