import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent{
  @Input() recipe: Recipe;

  constructor(){ }

  ngOnInit() {
  }

}
