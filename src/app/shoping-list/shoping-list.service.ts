import { Ingredient } from '../shared/ingredients.model'
import { Subject } from 'rxjs';

export class ShopingListService{
    updatedIngredients = new Subject<Ingredient[]>()
    private ingredients = [
        new Ingredient('Panner', 200),
        new Ingredient('Patato', 100),
        new Ingredient('Salt', 50),
        new Ingredient('Chili', 150),
    ]
    constructor(){

    }

    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.updatedIngredients.next(this.ingredients.slice());
        console.log(this.ingredients)
    }
}