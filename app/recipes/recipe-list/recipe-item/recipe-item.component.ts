import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: recipe;
@Output() recipeSelect = new EventEmitter<void>();

onRecipeSelected(){

  this.recipeSelect.emit();
}

  constructor() { }

  ngOnInit() {
  }

}
