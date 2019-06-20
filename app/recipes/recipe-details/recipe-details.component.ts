import { Component, OnInit, Input } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router,Params  } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe: recipe;
id:number;
  constructor(private Rservice:RecipeService, private route:ActivatedRoute,
     private router: Router) {

      }

     ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.Rservice.ongetRecipeID(this.id);
          }
        );
    }

  onAddSelectIngredient(){

    this.Rservice.onrecipeIngredient(this.recipe.ingredients);

  }


  onEditRecipe(){

    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe(){
    this.Rservice.recipeDelete(this.id);
    this.router.navigate(['/recipes']);


  }


}
