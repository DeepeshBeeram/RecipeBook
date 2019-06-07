import { Component, OnInit, Input } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipe: recipe;
  constructor() { }

  ngOnInit() {
  }

}
