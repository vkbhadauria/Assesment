import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: Recipe;
   @Input() index:number;
   
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigate(['recipe/'+this.index])
  }

}