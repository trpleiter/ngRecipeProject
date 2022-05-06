import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Just a description of the test',
      'https://www.24kitchen.nl/files/styles/social_media_share/public/2020-08/tagliatelle-zalm-spinazie-recept.jpg?itok=lao8-6Bd'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
