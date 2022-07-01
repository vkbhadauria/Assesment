import { Component, OnInit } from '@angular/core';
import { ShopingListService } from './shoping-list.service';
import { Ingredient } from '../shared/ingredients.model';
// import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shoping-list',
    templateUrl: './shoping-list.component.html',
    styleUrls: ['./shoping-list.component.css'],
    providers:[ShopingListService]
})

export class ShopingListComponent {
    ingredients=[];
    constructor(private shopinglistservice: ShopingListService){}

    ngOnInit(){
        this.ingredients = this.shopinglistservice.getIngredients();
        this.shopinglistservice.updatedIngredients.subscribe(
            (ingredients: Ingredient[])=>{
                this.ingredients=ingredients
            }
        )
    }

    
}