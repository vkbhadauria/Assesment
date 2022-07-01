import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipies: Recipe[]=[
            new Recipe('Chilli paneer','This is chilli panner product',
                        'https://thumbs.dreamstime.com/z/indo-chinese-starter-chilli-paneer-manchurian-spiced-cottage-cheese-cooked-fusion-soy-sweet-95646195.jpg'
                        // 'https://i.picsum.photos/id/116/200/300.jpg?grayscale&hmac=_XCX-twfBVL18V8EsDs3BHWTKv2IaKz_hxky0ppaEJw'
                        ,[
                            new Ingredient('Panner', 100),
                            new Ingredient('Chili', 100)
                          ]
                        ),
            new Recipe('Paneer Tikka','This is Panner tikka product',
                        'https://thumbs.dreamstime.com/z/grilled-cottage-cheese-also-known-as-paneer-tikka-kebab-chili-paneer-chilli-paneer-tandoori-paneer-india-india-bar-73297526.jpg',
                        // 'https://i.picsum.photos/id/116/200/300.jpg?grayscale&hmac=_XCX-twfBVL18V8EsDs3BHWTKv2IaKz_hxky0ppaEJw',
                        [
                            new Ingredient('Panner', 100),
                            new Ingredient('Patato', 200),
                          ]
                        ),
            new Recipe('Mix veg','This is Mix veg product',
                        'https://thumbs.dreamstime.com/z/indo-chinese-veg-paneer-manchurian-indo-chinese-veg-paneer-manchurian-street-snack-paneer-cottage-cheese-cubes-served-137568640.jpg',
                         [
                            new Ingredient('Vegitable', 100),
                            new Ingredient('Patato', 200),
                          ]
                        ),
            new Recipe('Chana Masala','This is chana masla product',
                        'https://thumbs.dreamstime.com/z/roasted-chickpeas-sesame-honey-photographed-overhead-wood-natural-light-61532710.jpg',
                        // 'https://i.picsum.photos/id/116/200/300.jpg?grayscale&hmac=_XCX-twfBVL18V8EsDs3BHWTKv2IaKz_hxky0ppaEJw',
                        [
                            new Ingredient('Panner', 100),
                            new Ingredient('Patato', 200),
                          ]
                        ),
  ]
  constructor() { }

  getRecipes(){
    return this.recipies.slice()
  }
  
  getRecipe(id:number){
    return this.recipies[id]
  }
  
  addRecipe(recipe: Recipe){
    this.recipies.push(recipe)
    console.log(this.recipies,'add recipe service')
  }
}
