import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { shopping_model } from 'src/app/shared/shopping.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit, OnDestroy {

recipes: recipe[];
subs: Subscription;



  constructor(private recipeSer:RecipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.subs = this.recipeSer.recipeSelected.
    subscribe(
      (recipes:recipe[]) => {
        this.recipes = recipes;

      }
    );

    this.recipes = this.recipeSer.getRecipe();
  }

  onNewRecipe(){

    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
