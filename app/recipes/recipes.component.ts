import { Component, OnInit } from '@angular/core';
import { recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  onRecipewasSelect:recipe;


  constructor() { }

  ngOnInit() {
  }

}
