import { Component, OnInit, OnDestroy } from '@angular/core';
import { shopping_model } from '../shared/shopping.model';
import { shoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: shopping_model[];
  private subs: Subscription;

  constructor(private SLservice:shoppinglistService) { }

  ngOnInit() {

    this.ingredients = this.SLservice.getIngredients();
   this.subs=  this.SLservice.ingredientsChanged
      .subscribe(
        (ingredients: shopping_model[]) => {
          this.ingredients = ingredients;
        }
      );
  }


  onEdit(index:number){

    this.SLservice.startEditing.next(index);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  }


