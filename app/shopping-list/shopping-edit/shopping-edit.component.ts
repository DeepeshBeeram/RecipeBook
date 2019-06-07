import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { shopping_model } from 'src/app/shared/shopping.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput:ElementRef;
@ViewChild('amountInput') amtInput:ElementRef;
@Output() ingredients = new EventEmitter<shopping_model>();


  onAdd(){

     const nameIn = this.nameInput.nativeElement.value;
     const amtIn = this.amtInput.nativeElement.value;
     const newIngredient= new shopping_model(nameIn,amtIn);
     this.ingredients.emit(newIngredient);


  }

  constructor() { }

  ngOnInit() {
  }

}
