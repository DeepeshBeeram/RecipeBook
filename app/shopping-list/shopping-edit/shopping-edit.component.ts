import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { shopping_model } from 'src/app/shared/shopping.model';
import { shoppinglistService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('f') slForm: NgForm;
editMode = false;
editIndex :number;
editIngredient: shopping_model;


  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new shopping_model(value.name, value.amount);

    if(this.editMode){
     this.SLService.updateIngredient(this.editIndex, newIngredient);
    }
    else{
      this.SLService.addIngredientClick(newIngredient);
      
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){

    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.SLService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  constructor(private SLService:shoppinglistService) { }

  ngOnInit() {
this.SLService.startEditing.
subscribe(
  (index:number) => {
    this.editIndex = index;
    this.editMode = true;
    this.editIngredient = this.SLService.getIngredientByID(index);
    this.slForm.setValue({
      name:this.editIngredient.name,
      amount: this.editIngredient.amount
    })
  }
);
}

}
