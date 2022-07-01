import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm:FormGroup;
  id:number;
  editable:boolean;

  constructor(private router: Router, private route: ActivatedRoute, private reciepservice: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id']
      this.editable=params['id'] != null; 
      console.log('log id>>>>>>>>>>',this.id,this.editable)
    })
    this.inItForm()
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern('/^[1-9]+[0-9]*$/')])
      })
    );
  }

  onDeleteIngredient(indx:number){
    console.log(indx,'>>>>>>>>>>');
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(indx)
  }

  saveForm(){
    console.log(11111111111111)
    const value=this.recipeForm.value
    console.log(this.recipeForm, value)
    const recipe=new Recipe(value.name,value.imagepath,value.description,value.ingredients)
    this.reciepservice.addRecipe(recipe)
    this.router.navigate(['recipe'])
  }

  inItForm(){
    let name='';
    let imagepath='';
    let description='';
    let ingredients=new FormArray([]);
    if(this.editable){
      const recipe=this.reciepservice.getRecipe(this.id)
      console.log(recipe, recipe.name)
      name=recipe.name,
      imagepath=recipe.imagePath,
      description=recipe.description
      if(recipe['ingredients']){
        for (let i of recipe['ingredients']){
          ingredients.push(new FormGroup({
            name:new FormControl(i.name, Validators.required),
            amount:new FormControl(i.amount, [Validators.required, Validators.pattern('/^[0-9]+[0-9]*$/')])
          }))
        }
      }
    }
    console.log('<<<<<<<<<<<<',ingredients,name)
    this.recipeForm = new FormGroup(
      {
        name : new FormControl(name),
        imagepath: new FormControl(imagepath),
        description: new FormControl(description),
        ingredients: ingredients,
      }
    )
  }
}