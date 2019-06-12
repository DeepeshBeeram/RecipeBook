import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { shopping_model } from 'src/app/shared/shopping.model';
import { shoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput:ElementRef;
@ViewChild('amountInput') amtInput:ElementRef;



  onAdd(){

     const nameIn = this.nameInput.nativeElement.value;
     const amtIn = this.amtInput.nativeElement.value;
     const newIngredient= new shopping_model(nameIn,amtIn);
     this.SLService.addIngredientClick(newIngredient);


  }

  constructor(private SLService:shoppinglistService) { }

  ngOnInit() {
  }

}
