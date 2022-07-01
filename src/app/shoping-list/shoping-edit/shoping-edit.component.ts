import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopingListService } from '../shoping-list.service';
import { Ingredient } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('amountval') amountval: ElementRef;
  @ViewChild('nameval') nameval: ElementRef;


  constructor(private shopinglistservice: ShopingListService) { }

  ngOnInit(): void {
  }

  updateingredient(){
    console.log(222222222222222222222,this.amountval.nativeElement.value, this.nameval.nativeElement.value  )
    const name=this.nameval.nativeElement.value
    const amount=this.amountval.nativeElement.value 
    console.log(name,amount,2222222222222)
    this.shopinglistservice.addIngredient(new Ingredient(name, amount))

  }
}
