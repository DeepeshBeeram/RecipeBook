import { Component, OnInit } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: recipe[] = [

  new recipe('Test recipe', 'This is a test one', 'https://www.google.com/search?q=recipe&rlz=1C1CHBF_enUS813US813&source=lnms&tbm=isch&sa=X&ved=0ahUKEwja1aqG-tPiAhWJtlkKHURcBJEQ_AUIECgB&biw=1707&bih=803&dpr=1.13#imgrc=VhaiNYg1RVI4RM:'),


];




  constructor() { }

  ngOnInit() {
  }

}
