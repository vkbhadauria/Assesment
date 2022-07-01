import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from './recipe.model'

@Component({
    selector:'app-recipe',
    templateUrl:'./recipe.component.html',
    styleUrls:['./recipe.component.css'],
    providers:[RecipeService]
})

export class RecipeComponent {


}