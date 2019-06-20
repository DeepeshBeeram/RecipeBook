import { Component, OnInit } from '@angular/core';
import { recipe } from '../shared/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  onRecipewasSelect:recipe;


  constructor(private recipeSer:RecipeService) { }

  ngOnInit() {

  }

}
