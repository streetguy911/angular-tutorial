export default class recipesModalController {
    constructor(products, $uibModalInstance, databaseService, $timeout) {
        this.$uibModalInstance = $uibModalInstance;
        this.$timeout = $timeout;
        // this.products = products.data;
        this.products = products;
        this.databaseService = databaseService;
        this.newRecipe = this.databaseService.newRecipe;
        this.quantityValues = this.databaseService.quantityValues;
        this.recipeAdded = false;
    }
    save() {
        this.databaseService.createRecipe();
        this.recipeAdded = true;
        this.$timeout(this.$uibModalInstance.close, 2000);
    }
    close() {
        this.$uibModalInstance.dismiss('cancel')
    }
    addIngredient() {
        this.newRecipe.ingredients.push({'name':this.ingredient, 'quantity': this.ingrQuantity + this.ingrQuantityValue});
        this.newRecipe.title = this.recipeTitle;

        console.log(this.newRecipe, 'added ingredients');
    }
    removeIngredient(ingredient) {
        console.log('remove current ingredient');
        this.databaseService.removeIngredient(ingredient);
    }
}