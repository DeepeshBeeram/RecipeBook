import { Component, OnInit } from '@angular/core';
import { shopping_model } from '../shared/shopping.model';
import { shoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: shopping_model[];

  constructor(private SLservice:shoppinglistService) { }

  ngOnInit() {

    this.ingredients = this.SLservice.getIngredients();
    this.SLservice.ingredientsChanged
      .subscribe(
        (ingredients: shopping_model[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  }


