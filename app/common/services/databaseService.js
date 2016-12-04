'use strict';

export default class DatabaseService {
    constructor ($http) {
        this.$http = $http;

        console.log('DatabaseService');
        this.quantityValues = [
            {'title': 'ложки'},
            {'title': 'милиграммы'},
            {'title': 'милилитры'}
        ];
        this.newRecipe = {title: "", ingredients: []};
    }
    recieveProducts () {
        return this.$http.get('https://angular-tutorial-server.herokuapp.com/api/product');
    }

    recieveProductsCategories() {
        return this.$http.get('https://angular-tutorial-server.herokuapp.com/api/category');
    }

    receiveRecipes() {
        // return this.$http.get('https://angular-tutorial-server.herokuapp.com/api/recipes');
        return {
            recipes: [
                {title: 'someRecipe1', description: 'put some shit to the plate'},
                {title: 'someRecipe2', description: 'put some shit to the plate 2'},
                {title: 'someRecipe3', description: 'put some shit to the plate 3'}
            ]
        }
    }
    createRecipe() {
        // waiting for API
        // call API that create new recipe
        console.log('Recipe created');
    }

}