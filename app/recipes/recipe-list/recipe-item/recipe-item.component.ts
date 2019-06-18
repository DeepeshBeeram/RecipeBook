import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: recipe;
@Input() index: number;

  ngOnInit() {
 
  }

}
