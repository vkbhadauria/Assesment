import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { NgTemplateDrivenFormComponent } from './ng-template-driven-form/ng-template-driven-form.component';
import { NgReactiveFormComponent } from './ng-reactive-form/ng-reactive-form.component';
import { RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component'
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './guard/auth-guard.guard';

const routes: Routes = [ 
    { path:'login', component: LoginComponent},
    { path:'recipe', component: RecipeComponent,canActivate:[AuthGuard],
    children : [ 
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]  
},
  {
    path:'', component: RecipeListComponent,canActivate:[AuthGuard]
  },
  {
    path:'shoping-list', component: ShopingListComponent, canActivate:[AuthGuard]
  },
   {
    path:'template-driven-form', component: NgTemplateDrivenFormComponent, canActivate:[AuthGuard]
  },
  {
    path:'reactive-form', component: NgReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
