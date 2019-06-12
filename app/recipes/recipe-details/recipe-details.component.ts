import { Component, OnInit, Input } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipe: recipe;
  constructor(private Rservice:RecipeService) { }

  ngOnInit() {
  }

  onAddSelectIngredient(){

    this.Rservice.onrecipeIngredient(this.recipe.ingredients);

  }

}
