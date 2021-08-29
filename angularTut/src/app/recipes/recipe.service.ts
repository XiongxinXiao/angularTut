import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'test1',
            'test1', 
            'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg',
            [new Ingredient('pork', 2), new Ingredient('chicken', 5)]),
        new Recipe(
            'test2', 
            'test2', 
            'https://www.acouplecooks.com/wp-content/uploads/2019/11/Recipes-Header-1.jpg',
            [new Ingredient('beef', 2), new Ingredient('potato', 5)])
      ];

    recipeSelected = new EventEmitter<Recipe> ();

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToSl(ingredients: Ingredient[]) {
        this.slService.receiveIngredients(ingredients);
    }
}