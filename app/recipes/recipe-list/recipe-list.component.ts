import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { shopping_model } from 'src/app/shared/shopping.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {

recipes: recipe[];



  constructor(private recipeSer:RecipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.recipes = this.recipeSer.getRecipe();
  }

  onNewRecipe(){

    this.router.navigate(['new'], {relativeTo: this.route});


  }

}
