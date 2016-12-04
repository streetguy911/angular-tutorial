export default class RecipesController {
    constructor(recipes, modalsService) {
        this.recipes = recipes.recipes;
        this.modalsService = modalsService;
    }
    addNewRecipe() {
        this.modalsService.openRecipesModal();
    }
}