import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
    id:number;
    recipe:Recipe;
    // constructor( private route: ActivatedRoute, private recipeService: RecipeService){
    //     console.log(222222222)

    // }
constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }
    ngOnInit(){
        console.log(3333333, this.route.params)
        this.route.params
        .subscribe(
            (params: Params) => {
            console.log(params)
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
        console.log(444444444)
        }

    toShopingList(){
        console.log('here1111')
        this.router.navigate(['shoping-list'])

    }
    editRecipe(){
        console.log(this.id,'<<<<<<<<<<<<<<<<<<<<')
        this.router.navigate(['edit'], {relativeTo: this.route})
    }
    dropdown(event:any){
        const value=event.target.value
        switch (value) {
            case "shopinglist":
                console.log('hereeeee')
                this.toShopingList()
                break;
            case 'edit recipe':
                console.log('Edit recipeeeeeeee')
                this.editRecipe()
            default:
                break;
        }
        console.log('selected---------', event.target.value)
    }
}
